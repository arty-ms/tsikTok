import express, { Request, Router } from 'express';
import cors, { CorsOptions } from 'cors';
import path from 'path';

import settings from 'config/settings/index';
import PostgresDBService from 'config/db';
import router from "controllers/routes";

const app = express();

const initializeMiddlewares = (): void => {
    app.use(express.json());

    app.use(express.urlencoded({ extended: false }));

    app.use(
        cors((req: Request, callback: (err: Error | null, options?: CorsOptions) => void) => {
            const currentClientOrigin = req.header('origin');

            const origin = (settings.allowedClientOrigins || []).find((allowedOrigin: string) => {
                return allowedOrigin === currentClientOrigin;
            });

            callback(null, { origin, credentials: true });
        })
    );

    app.use(router);
    app.use(express.static(path.join(__dirname, '../public')));
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
};

const runServer = (port: number): void => {
    initializeMiddlewares();

    app.listen(port, () => {
        console.warn(`Server has been started on http://localhost:${port}/`);
    });
};

const dBConnector = new PostgresDBService(settings);

dBConnector.connect().then(connection => {
    runServer(settings.port);
});

