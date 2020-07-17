import axios from 'axios';
import FormData from 'form-data';
import HttpService from '../services/HttpService';
import settings from '../config/settings';

class VideoAPI {
  constructor(httpService) {
    this.httpService = httpService;
  }

  async uploadVideo(file) {
    const formData = new FormData();

    formData.append('file', file);

    const result = await axios.post(`${settings.BackendUrl}/api/video`,
      formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      });

    return result.data.result;
  }
}

export default new VideoAPI(HttpService);
