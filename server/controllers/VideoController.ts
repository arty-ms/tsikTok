import {Inject} from 'typedi';
import { Response } from 'express';
import {
  Controller,
  CurrentUser,
  Post,
  Res,
  UploadedFile,
} from 'routing-controllers';
import VideoService from '../services/VideoService';
import { User } from '../models/UserModel';
import BaseController from './BaseController';
import { ResponseWithStatusCode } from '../response';

@Controller()
export default class VideoController extends BaseController {
  @Inject(type => VideoService)
  public videoService: VideoService;

  @Post('/api/video')
  public async uploadVideo(@UploadedFile('file') file: any, @Res() res: Response, @CurrentUser() user: User) {
    try {
      // if (!user) {
      //   return this.sendErrorResponse(res, new ResponseWithStatusCode({ statusCode: StatusCode.UNAUTHORIZED }));
      // }

      const uploadedVideoData = await this.videoService.uploadVideo(file);

      return this.sendSuccessResponse(res, new ResponseWithStatusCode({ data: uploadedVideoData.videoUrl }));
    } catch (error) {
      const message = `[VideoController.uploadVideo] error while uploading video, (err) => ${error.message}`;

      return this.handleError(res, message);
    }
  }
}


