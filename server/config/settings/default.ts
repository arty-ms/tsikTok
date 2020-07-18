import { Config } from 'constants/types';

const defaultConfig: Config = {
  port: 3000,
  allowedClientOrigins: [],
  databaseUrl: process.env.DATABASE_URL,
  databaseUrlSSL: Boolean(process.env.databaseUrlSSL) || false,
  tokenSecret: 'tokenSecret',
};

export default defaultConfig;
