import HttpService from '../services/HttpService';

class PublicationAPI {
  constructor(httpService) {
    this.httpService = httpService;
  }

  async createPublication(publication) {
    return this.httpService.post('api/publication', publication);
  }

  async getPublication(publicationId) {
    return this.httpService.get(`api/publication/${publicationId}`);
  }

  async getLatestPublications(pageOptions) {
    return this.httpService.post('api/publication/latest', pageOptions);
  }
}

export default new PublicationAPI(HttpService);
