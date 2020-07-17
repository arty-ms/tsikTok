import { Config } from 'constants/types';

const LocalConfig: Config = {
    allowedClientOrigins: ['*'],
    databaseUrl: process.env.DATABASE_URL as string | '',
    port: 3000
};

export default LocalConfig;
