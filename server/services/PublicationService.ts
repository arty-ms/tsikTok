import { Inject, Service } from 'typedi';
import { EntityManager } from 'typeorm';
import { Publication } from '../models/PublicationModel';
import { UploadedVideo } from '../types';
import { PageOptions, PublicationPreviewPaginationResult } from '../pagination';
import UtilsService from './UtilsService';

@Service()
export default class PublicationService {
  @Inject('EntityManager')
  public entityManager: EntityManager;

  @Inject(type => UtilsService)
  public utilsService: UtilsService;

  public createPublication(
    userId: number, selectedCandidateId: number, uploadedVideo: UploadedVideo) {
    const publication = this.entityManager.create(Publication, {
      user: {
        id: userId,
      },
      selectedCandidate: {
        id: selectedCandidateId,
      },
      videoId: uploadedVideo.id,
      videoUrl: uploadedVideo.videoUrl,
      videoWidth: uploadedVideo.width,
      videoHeight: uploadedVideo.height,
      previewUrl: uploadedVideo.thumbnailUrl,
    });

    return this.entityManager.save(publication);
  }

  public getPublication(publicationId: number): Promise<Publication> {
    return this.entityManager.findOne(Publication, publicationId, { relations: ['user', 'selectedCandidate'] });
  }

  public async getLatestPublications(pageOptions: PageOptions): Promise<PublicationPreviewPaginationResult> {
    const result = await this.entityManager.query(`
      WITH cte AS (
        SELECT publication.*,
        json_build_object(
           'id', "user".id,
           'firstName', "user"."firstName",
           'lastName', "user"."lastName",
           'avatarUrl', "user"."avatarUrl"
        ) as "user",
        json_build_object(
           'id', "candidate".id,
           'fullName', "candidate"."fullName"
        ) as "selectedCandidate"
        FROM publications publication
          INNER JOIN users "user" ON publication."userId" = "user"."id"
          INNER JOIN candidates "candidate" ON publication."selectedCandidateId" = "candidate"."id"
        GROUP BY publication.id, candidate.id, "user".id, publication."createdAt"
        ORDER BY publication."createdAt" DESC
      )
      SELECT *
        FROM (
          TABLE cte
          LIMIT $1
          OFFSET $2
         ) sub
       RIGHT JOIN (SELECT count(*) FROM cte) c("totalCount") ON true;
    `, [
      pageOptions.pageSize,
      pageOptions.pageSize * pageOptions.page,
    ]);

    return this.utilsService.handlePaginationResult(result);
  }
}
