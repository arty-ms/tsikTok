import {Inject} from "typedi";
import { Response } from "express";
import {
  Controller,
  Post,
  Res,
  UploadedFile,
} from 'routing-controllers';
import Logger from "../services/logger";
import VideoService from '../services/VideoService';

@Controller()
export default class VideoController {
  @Inject('Logger')
  public logger: Logger;

  @Inject('VideoService')
  public videoService: VideoService;

  @Post('/api/video')
  async uploadVideo(@UploadedFile('file') file: any, @Res() res: Response) {
    try {
      const fileUrl = await this.videoService.uploadVideo(file);

      return res.status(200).json({ result: fileUrl });
    } catch (error) {
      this.logger.error(`[VideoController.uploadVideo] error while uploading video, (err) => ${error.message}`);
    }
  }
}


