import {
  Column, CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  user = 'user',
  manager = 'manager',
  admin = 'admin',
}

export enum UserContactType {
  ok ='ok',
  vk ='vk',
  facebook = 'facebook',
  instagram = 'instagram',
  youtube = 'youtube',
  skype = 'skype',
  email = 'email',
}

export enum UserStatus {
  invited = 'invited',
  phoneConfirmed = 'phoneConfirmed',
  active = 'active',
  inactive = 'inactive',
}

export class UserContact {
  type: UserContactType;

  value: string;
}

export class UserSettings {
  socialNetworksVisible: boolean;

  structureVisible: boolean;

  phoneVisible: boolean;
}

export class UserDataInput {
  public firstName: string;

  public lastName: string;

  public phone: string;

  public avatarUrl: string;

  public contacts: UserContact[];

  public settings: UserSettings;
}

export const DefaultUserContacts = [{
  type: UserContactType.ok,
  value: '',
}, {
  type: UserContactType.vk,
  value: '',
}, {
  type: UserContactType.facebook,
  value: '',
}, {
  type: UserContactType.instagram,
  value: '',
}, {
  type: UserContactType.youtube,
  value: '',
}, {
  type: UserContactType.skype,
  value: '',
}, {
  type: UserContactType.email,
  value: '',
}];

export const DefaultUserSettings = {
  socialNetworksVisible: false,
  structureVisible: false,
  phoneVisible: false,
};

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public firstName: string;

  @Column({ nullable: true })
  public lastName: string;

  @Column({ nullable: true })
  public anonymous: boolean;

  @Column({ nullable: true })
  public email: string;

  @Column()
  public phone: string;

  @Column({ type: 'jsonb', default: DefaultUserContacts })
  public contacts: UserContact[];

  @Column({ type: 'jsonb', default: DefaultUserSettings })
  public settings: UserSettings;

  @Column({ default: '' })
  public avatarUrl: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.user })
  public roles: UserRole[];

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.invited })
  public status: UserStatus;

  //authorization purpose only
  // TODO move all tokens to redis
  @Column({nullable: true})
  public authorizationToken: string;

  @Column({nullable: true})
  public refreshToken: string;

  @Column({nullable: true})
  public verificationToken: string;

  @Column({nullable: true})
  public signUpToken: string;

  @Column({nullable: true})
  public resetPasswordToken: string;

  @Column({nullable: true})
  public verificationCode: string;

  @Column({nullable: true})
  public password: string;

  @CreateDateColumn({ type: 'timestamptz' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  public updatedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  public activatedAt: Date;
}
