export enum ErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  ALREADY_EXIST = 'ALREADY_EXIST',
  NOT_VALID = 'NOT_VALID',
}

export default class ServerError extends Error {
  public errorCode: ErrorCode;

  constructor(message: string, errorCode: ErrorCode) {
    super(message);

    this.errorCode = errorCode;
  }

  public toString() {
    return `code:${this.errorCode}; message: ${this.message}`;
  }
}
