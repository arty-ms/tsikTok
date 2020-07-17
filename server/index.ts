import bodyParser from 'body-parser';
import { Application } from 'express';
import cookieParser from 'cookie-parser';
import 'reflect-metadata';
import { Container } from 'typedi';
import { Action, createExpressServer, useContainer } from 'routing-controllers';

import settings from './config/settings';
import PostgresDBService from './db/PostgresDBService';
import controllers from './controllers';
import Logger from './services/Logger';
import { UserRole } from './models/UserModel';
import UserService from './services/UserService';

const logger: Logger = Container.get('Logger');

const currentConfiguration = process.env.ENVIRONMENT || 'development';
const port = process.env.PORT || settings.port;

logger.info(`Environment: ${currentConfiguration}`);
logger.info(`Allowed Origins: ${settings.allowedClientOrigins}`);

useContainer(Container);

export class ApplicationServer {
  public app: Application;
  public logger: Logger;
  public userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
    this.logger = logger;
    this.app = createExpressServer({
      controllers,
      cors: {
        origin: (origin, callback) => {
          if (settings.allowedClientOrigins.indexOf(origin) !== -1) {
            callback(null, true)
          } else {
            callback(new Error('Not allowed by CORS'))
          }
        },
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      },
      authorizationChecker: async (action: Action, roles: UserRole[]) => {
        const token = action.request.headers["authorizationToken"];
        const user = await this.userService.getUserByToken(token);

        if (user && !roles.length) {
          return true;
        }

        if (user && roles.find(role => user.roles.includes(role))) {
          return true;
        }

        return false;
      },
      currentUserChecker: async (action: Action) => {
        const token = action.request.headers["authorizationToken"];

        return this.userService.getUserByToken(token);
      }
    });
  }

  public async start() {
    this.registerBodyParsers();
    this.run()
  }

  public registerBodyParsers() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cookieParser(settings.tokenSecret));
  }

  public async run() {
     await this.app.listen(port);

     this.logger.info(`Server running on port: ${port}`);
  }
}

const dBConnector = new PostgresDBService(settings);

dBConnector.connect().then(async (connection) => {
  try {
    logger.info(`DB connected to ${settings.databaseUrl}`);

    Container.set('EntityManager', dBConnector.entityManager);
    Container.set('QueryRunner', connection.createQueryRunner());
    // Container.set('RedisClient', RedisClient);

    const userService: UserService = Container.get(UserService);
    const server = new ApplicationServer(userService);
    await server.start();
  } catch(error) {
    logger.error(error);
  }
}).catch(error => {
  logger.error(`Error while connecting to db: ${error.message}`);
});
