/* eslint-disable no-console */
const isProduction = window.ENVIRONMENT === 'production';

export default class Logger {
  static info(message, options) {
    if (!isProduction) {
      console.log(message);
    }
  }

  static warn(message, options) {
    if (!isProduction) {
      console.warn(message);
    }
  }

  static error(error, options) {
    if (!isProduction) {
      const errorMessage = new Error(error);

      console.error(errorMessage);
    }
  }
}
