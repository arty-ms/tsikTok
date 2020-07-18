export interface Config {
  port: number;
  allowedClientOrigins: string[];
  databaseUrl: string;
  databaseUrlSSL: boolean;
  tokenSecret: string;
}
