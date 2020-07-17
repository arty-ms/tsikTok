import { Config } from 'constants/types';

const defaultConfig: Config = {
    port: 3000,
    allowedClientOrigins: [],
    databaseUrl: process.env.DATABASE_URL
};

export default defaultConfig;
