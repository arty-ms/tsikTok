import {Inject} from 'typedi';
import {
  JsonController,
  CurrentUser,
  Get,
  Post,
  Body,
  Param,
  Res,
} from 'routing-controllers';
import { Response } from 'express';
import PublicationService from '../services/PublicationService';
import { User } from '../models/UserModel';
import BaseController from './BaseController';
import { ResponseWithStatusCode } from '../response';
import VideoService from '../services/VideoService';

@JsonController()
export default class PublicationController extends BaseController {
  @Inject(type => PublicationService)
  public publicationService: PublicationService;

  @Inject(type => VideoService)
  public videoService: VideoService;

  @Post('/api/publication/latest')
  public async getLatestPublications(@Body() body: any, @Res() res: Response) {
    try {
      const {
        page,
        pageSize,
        skip,
      } = body;

      const publications = await this.publicationService.getLatestPublications({
        page,
        pageSize,
        skip,
      });

      return new ResponseWithStatusCode({ data: publications });
    } catch (error) {
      const message = `[PublicationController.getPublication] error while getting publication, (err) => ${error.message}`;

      return this.handleError(res, message);
    }
  }

  @Get('/api/publication/:publicationId')
  public async getPublication(@Param('publicationId') publicationId: string, @Res() res: Response) {
    try {
      const publication = await this.publicationService.getPublication(parseInt(publicationId));

      return new ResponseWithStatusCode({ data: publication });
    } catch (error) {
      const message = `[PublicationController.getPublication] error while getting publication, (err) => ${error.message}`;

      return this.handleError(res, message);
    }
  }

  @Post('/api/publication/create')
  public async createPublication(@Body() body: any, @CurrentUser() user: User, @Res() res: Response) {
    try {
      const {
        videoUrl,
        selectedCandidateId,
      } = body;

      // if (!user) {
      //   return this.sendErrorResponse(res, new ResponseWithStatusCode({ statusCode: StatusCode.UNAUTHORIZED }));
      // }

      const video = await this.videoService.getVideo(videoUrl);
      const createdPublication = await this.publicationService.createPublication(user.id, selectedCandidateId, video);

      return this.sendSuccessResponse(res, new ResponseWithStatusCode({ data: createdPublication }));
    } catch (error) {
      const message = `[PublicationController.createPublication] error while creating publication, (err) => ${error.message}`;

      return this.handleError(res, message);
    }
  }
}


