import { Inject, Service } from 'typedi';
import { EntityManager } from 'typeorm';
import { PageOptions } from '../pagination';

@Service()
export default class DashboardService {
  @Inject('EntityManager')
  public entityManager: EntityManager;

  public getLastPublications(pageOptions: PageOptions) {

  }
}
