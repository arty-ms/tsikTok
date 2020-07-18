import { Inject, Service } from 'typedi';
import cloudinary from 'cloudinary';
import Logger from './Logger';
import * as stream from 'stream';

const cloudinaryCloudName = 'dddorgysu';
const cloudinaryAPIKey = '182264826829938';
const cloudinaryAPISecret = 'XeRcHCoeO27s0mK5tGBJh_jwkQ8';

@Service('VideoService')
export default class VideoService {
  @Inject('Logger')
  public logger: Logger;

  cloudinary: any;

  constructor() {
    cloudinary.v2.config({
      cloud_name: cloudinaryCloudName,
      api_key: cloudinaryAPIKey,
      api_secret: cloudinaryAPISecret
    });

    this.cloudinary = cloudinary.v2;
  }

  async uploadVideo(file: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const cloudinaryStream = this.cloudinary.uploader.upload_stream({
        resource_type: 'video',
        public_id: 'hr/video',
        overwrite: true,
      }, (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve(result.secure_url);
      });

      const bufferStream = new stream.PassThrough();
      bufferStream.end(new Buffer(file.buffer));

      // @ts-ignore
      bufferStream.pipe(cloudinaryStream);
    });
  }
}
