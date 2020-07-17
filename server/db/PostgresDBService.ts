import { Service } from 'typedi';
import { Connection, createConnection, EntityManager } from 'typeorm';
import DatabaseConnectorInterface from './DatabaseInterface';
import entities from '../models';

@Service('PostgresDBConnector')
export default class PostgresDBConnector implements DatabaseConnectorInterface {
  public settings: any;
  public connection: Connection;
  public entityManager: EntityManager;

  constructor(settings) {
    this.settings = settings;
  }

  public async connect() {
    this.connection = await createConnection({
      type: 'postgres',
      url: this.settings.databaseUrl,
      entities,
      extra: {
        ssl: this.settings.databaseUrlSSL,
        rejectUnauthorized: false,
        timezone: 'utc'
      },
      synchronize: false,
      logging: false
    });

    this.entityManager = new EntityManager(this.connection);

    return this.connection;
  }
}
