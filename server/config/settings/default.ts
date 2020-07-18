import { Config } from 'types';

const defaultConfig: Config = {
  port: 3000,
  allowedClientOrigins: ['http://localhost:8080'],
  databaseUrl: process.env.DATABASE_URL,
  databaseUrlSSL: Boolean(process.env.databaseUrlSSL) || false,
  tokenSecret: 'tokenSecret',
  //Cloudinary config
  cloudinaryCloudName: 'dddorgysu',
  cloudinaryAPIKey: '182264826829938',
  cloudinaryAPISecret: 'XeRcHCoeO27s0mK5tGBJh_jwkQ8',
  cloudinaryFolder: 'hr/video',
};

export default defaultConfig;
