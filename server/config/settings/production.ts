import { Config } from 'constants/types';

const defaultConfig: Config = {
  allowedClientOrigins: ['*'],
  databaseUrl: process.env.DATABASE_URL as string || '',
  databaseUrlSSL: Boolean(process.env.databaseUrlSSL) || false,
  port: 9000,
  tokenSecret: 'tokenSecret',
};

export default defaultConfig;
