import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './UserModel';
import { Candidate } from './CandidateModel';

export class PublicationPreview {
  public id: number;

  public user: User;

  public previewUrl: string;

  public previewWidth: number;

  public previewHeight: number;

  public createdAt: Date;

  public updatedAt: Date;
}

@Entity('publications')
export class Publication {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(type => User)
  public user: User;

  @Column()
  public videoId: string;

  @Column()
  public videoUrl: string;

  @Column()
  public videoWidth: number;

  @Column()
  public videoHeight: number;

  @Column()
  public previewUrl: string;

  @ManyToOne(type => Candidate)
  public selectedCandidate: Candidate;

  @CreateDateColumn({ type: 'timestamptz' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  public updatedAt: Date;
}
