import { Config } from 'types';

const defaultConfig: Config = {
  allowedClientOrigins: [],
  databaseUrl: process.env.DATABASE_URL as string || '',
  databaseUrlSSL: Boolean(process.env.databaseUrlSSL) || false,
  port: 3000,
  tokenSecret: 'tokenSecret',
  //Cloudinary config
  cloudinaryCloudName: 'dddorgysu',
  cloudinaryAPIKey: '182264826829938',
  cloudinaryAPISecret: 'XeRcHCoeO27s0mK5tGBJh_jwkQ8',
  cloudinaryFolder: 'hr/video',
};

export default defaultConfig;
