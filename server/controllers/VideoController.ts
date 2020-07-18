import {Inject} from 'typedi';
import { Response } from 'express';
import {
  Controller,
  Post,
  Res,
  UploadedFile,
} from 'routing-controllers';
import VideoService from '../services/VideoService';
import BaseController from './BaseController';
import { ResponseWithStatusCode } from '../response';

@Controller()
export default class VideoController extends BaseController {
  @Inject(type => VideoService)
  public videoService: VideoService;

  @Post('/api/video')
  public async uploadVideo(@UploadedFile('file') file: any, @Res() res: Response) {
    try {
      const uploadedVideoData = await this.videoService.uploadVideo(file);

      return this.sendSuccessResponse(res, new ResponseWithStatusCode({ data: uploadedVideoData }));
    } catch (error) {
      const message = `[VideoController.uploadVideo] error while uploading video, (err) => ${error.message}`;

      return this.handleError(res, message);
    }
  }
}


