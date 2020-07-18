import { Config } from 'constants/types';

const defaultConfig: Config = {
  port: 3000,
  allowedClientOrigins: ['http://localhost:8080'],
  databaseUrl: process.env.DATABASE_URL,
  databaseUrlSSL: Boolean(process.env.databaseUrlSSL) || false,
  tokenSecret: 'tokenSecret',
};

export default defaultConfig;
