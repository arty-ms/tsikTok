import { Config } from 'constants/types';

const defaultConfig: Config = {
    allowedClientOrigins: ['*'],
    databaseUrl: process.env.DATABASE_URL as string | '',
    port: 9000
};

export default defaultConfig;
