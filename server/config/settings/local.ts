import { Config } from 'types';

const LocalConfig: Config = {
  allowedClientOrigins: ['http://localhost:8080'],
  databaseUrl: process.env.DATABASE_URL as string | '',
  databaseUrlSSL: process.env.databaseUrlSSL === 'true' || false,
  port: 3000,
  tokenSecret: 'tokenSecret',
  //Cloudinary config
  cloudinaryCloudName: 'dddorgysu',
  cloudinaryAPIKey: '182264826829938',
  cloudinaryAPISecret: 'XeRcHCoeO27s0mK5tGBJh_jwkQ8',
  cloudinaryFolder: 'hr/video',
};

export default LocalConfig;
