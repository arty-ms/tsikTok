export interface UploadedVideo {
  id: string;
  videoUrl: string;
  width: number;
  height: number;
  format: string;
  createdAt: string;
  thumbnailUrl: string;
}

export interface Config {
  port: number;
  allowedClientOrigins: string[];
  databaseUrl: string;
  databaseUrlSSL: boolean;
  tokenSecret: string;

  //Cloudinary config
  cloudinaryCloudName: string;
  cloudinaryAPIKey: string;
  cloudinaryAPISecret: string;
  cloudinaryFolder: string;
}
