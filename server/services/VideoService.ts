import _ from 'lodash';
import { Inject, Service } from 'typedi';
import cloudinary from 'cloudinary';
import * as stream from 'stream';
import Logger from './Logger';
import { Config } from 'types';
import { UploadedVideo } from '../types';

@Service()
export default class VideoService {
  @Inject('Logger')
  public logger: Logger;

  public config: Config;

  public cloudinary: any;

  constructor(@Inject('config') config: Config) {
    this.config = config;

    cloudinary.v2.config({
      cloud_name: config.cloudinaryCloudName,
      api_key: config.cloudinaryAPIKey,
      api_secret: config.cloudinaryAPISecret
    });

    this.cloudinary = cloudinary.v2;
  }

  public async getVideo(publicId: string): Promise<UploadedVideo> {
    const video = await this.cloudinary.api.resource(publicId, {
      resource_type: 'video',
    });

    return {
      id: video.public_id,
      videoUrl: video.secure_url,
      width: video.width,
      height: video.height,
      format: video.format,
      createdAt: video.created_at,
      thumbnailUrl: '',
    };
  }

  public async uploadVideo(file: any): Promise<UploadedVideo> {
    return new Promise((resolve, reject) => {
      const cloudinaryStream = this.cloudinary.uploader.upload_stream({
        resource_type: 'video',
        public_id: file.name,
      }, (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve({
          id: result.public_id,
          videoUrl: result.secure_url,
          width: result.width,
          height: result.height,
          format: result.format,
          createdAt: result.created_at,
          thumbnailUrl: '',
        });
      });

      const bufferStream = new stream.PassThrough();
      bufferStream.end(new Buffer(file.buffer));

      // @ts-ignore
      bufferStream.pipe(cloudinaryStream);
    });
  }
}
