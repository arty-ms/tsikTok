import { StatusCode } from './StatusCode';

export default class ServerError extends Error {
  public errorCode: StatusCode;

  constructor(message: string, errorCode: StatusCode) {
    super(message);

    this.errorCode = errorCode;
  }

  public toString() {
    return `code:${this.errorCode}; message: ${this.message}`;
  }
}
