import _ from 'lodash';
import axios from 'axios';
import settings from '../config/settings';

export const defaultConfig = {
  baseURL: `${settings.BackendUrl}/`,
};

export class HttpService {
  constructor() {
    this.setupClient(defaultConfig);
  }

  setupClient(config) {
    this.axios = axios.create(config);
  }

  setHeaders(headers) {
    this.setupClient({
      ...defaultConfig,
      headers,
    });
  }

  addHeaders(headers) {
    this.setupClient({
      ...defaultConfig,
      headers: {
        ...this.axios.defaults.headers,
        ...headers,
      },
    });
  }

  async get(...args) {
    try {
      const response = await this.axios.get(...args);

      return _.get(response, 'data.result');
    } catch ({ response }) {
      const message = response.data.message;

      throw new Error(message);
    }
  }

  async post(...args) {
    try {
      const response = await this.axios.post(...args);

      return _.get(response, 'data.result');
    } catch ({ response }) {
      if (response.data.errorCode === 'VALIDATION_FAIL') {
        throw response.data;
      }

      const message = response.data.message;

      throw new Error(message);
    }
  }

  async put(...args) {
    try {
      const response = await this.axios.put(...args);

      return _.get(response, 'data.result');
    } catch ({ response }) {
      if (response.data.errorCode === 'VALIDATION_FAIL') {
        throw response.data;
      }

      const message = response.data.message;

      throw new Error(message);
    }
  }

  async delete(...args) {
    try {
      const response = await this.axios.delete(...args);

      return _.get(response, 'data.result');
    } catch ({ response }) {
      const message = response.data.message;

      throw new Error(message);
    }
  }
}

export default new HttpService();
