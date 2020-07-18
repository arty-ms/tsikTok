import { Status, StatusCode } from './StatusCode';

export class ResponseWithStatusCode {
  public status: Status;
  public statusCode: StatusCode;
  public message: string;
  public result: any;

  public constructor({
    statusCode = StatusCode.OK,
    data = null,
    message = '',
  }) {
    this.statusCode = statusCode;
    this.message = message;
    this.result = data;
  }
}

