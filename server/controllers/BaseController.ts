import { Response } from 'express';
import { ResponseWithStatusCode, Status, StatusCode } from '../response';
import { Inject } from 'typedi';
import Logger from '../services/Logger';

export const getHttpStatusCode = (code: StatusCode) => {
  switch (code) {
    case StatusCode.UNAUTHORIZED: return 401;
    case StatusCode.NOT_FOUND: return 404;
    case StatusCode.ALREADY_EXIST: return 401;
    case StatusCode.BAD_REQUEST:
    default:
      return 400;
  }
};

export default class BaseController {
  @Inject('Logger')
  public logger: Logger;

  public async sendSuccessResponse(res: Response, responseWithStatusCode: ResponseWithStatusCode) {
    responseWithStatusCode.status = Status.success;

    return res.status(200).json(responseWithStatusCode);
  }

  public async sendErrorResponse(res: Response, responseWithStatusCode: ResponseWithStatusCode) {
    responseWithStatusCode.status = Status.error;

    return res.status(getHttpStatusCode(responseWithStatusCode.statusCode)).json(responseWithStatusCode);
  }

  public handleError(res, errorMessage: string) {
    this.logger.error(errorMessage);

    return this.sendErrorResponse(res, new ResponseWithStatusCode({ statusCode: StatusCode.BAD_REQUEST, message: errorMessage }));
  }
}
