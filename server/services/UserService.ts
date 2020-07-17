import * as bcrypt from 'bcrypt-nodejs';
import { Inject, Service } from 'typedi';
import { EntityManager, UpdateResult } from 'typeorm';
import { User, UserDataInput, UserRole, UserStatus } from '../models/UserModel';

@Service()
export default class UserService {
  @Inject('EntityManager')
  public entityManager: EntityManager;

  public async getUser(selectOptions: any): Promise<User> {
    return this.entityManager.findOne(User, selectOptions);
  }

  public async getUserByToken(authorizationToken: string): Promise<User> {
    return this.entityManager.findOne(User, { authorizationToken });
  }

  public getAllUsers() {
    return this.entityManager.find(User);
  }

  public getAdminUser(): Promise<User> {
    return this.entityManager.findOne(User, 1);
  }

  public initiateUser(phone: string, verificationCode: string) {
    return this.createUser({
      phone,
      verificationCode,
    });
  }

  public createUser(userData: any): Promise<User> {
    const createdUser = this.entityManager.create(User, {
      ...userData,
      role: UserRole[userData.role],
    });

    return this.entityManager.save(createdUser);
  }

  public updateUser(user: any): Promise<UpdateResult> {
    return this.entityManager.createQueryBuilder()
        .update(User)
        .set({ ...user })
        .where("id = :id", { id: user.id })
        .returning("*")
        .execute();
  }

  public setVerificationToken(userId: number, verificationToken: string) {
    return this.entityManager.update(User, userId, { verificationToken });
  }

  public removeVerificationToken(userId: number) {
    return this.setVerificationToken(userId, null);
  }

  public setCode(userId: number, verificationCode: string) {
    return this.entityManager.update(User, userId, { verificationCode });
  }

  public removeCode(userId: number) {
    return this.setCode(userId, null);
  }

  public setSignUpToken(userId: number, signUpToken: string) {
    return this.entityManager.update(User, userId, { signUpToken });
  }

  public removeSignUpToken(userId: number) {
    return this.setSignUpToken(userId, null);
  }

  public setAuthorizationToken(userId: number, authorizationToken: string): Promise<UpdateResult> {
    return this.entityManager.update(User, userId, { authorizationToken });
  }

  public removeAuthorizationToken(userId: number): Promise<UpdateResult> {
    return this.setAuthorizationToken(userId, null);
  }

  public setResetPasswordToken(userId: number, resetPasswordToken: string): Promise<UpdateResult> {
    return this.entityManager.update(User, userId, { resetPasswordToken });
  }

  public removeResetPasswordToken(userId: number): Promise<UpdateResult> {
    return this.setResetPasswordToken(userId, null);
  }

  public setStatus(userId: number, status: UserStatus): Promise<UpdateResult> {
    if (status === UserStatus.active) {
      return this.entityManager.update(User, userId, {
        status,
        activatedAt: new Date(),
      });
    }

    return this.entityManager.update(User, userId, { status });
  }

  public async changePassword(userId, oldPassword, newPassword): Promise<UpdateResult | boolean> {
    const user = await this.getUser({id: userId});
    const isValidPassword = bcrypt.compareSync(oldPassword, user.password);

    if (isValidPassword) {
      return this.entityManager.update(User, userId, {password: newPassword});
    }

    return false;
  }

  public changePhone(userId, newPhone): Promise<UpdateResult> {
    return this.entityManager.update(User, userId, {phone: newPhone});
  }

  public updateUserData(userId, userData: UserDataInput): Promise<UpdateResult> {
    return this.entityManager.update(User, userId, userData);
  }

  public async createAnonymousUser(phone: string, email: string, firstName: string): Promise<User> {
    const user = await this.entityManager.createQueryBuilder()
        .select("user")
        .from(User, "user")
        .where("user.phone = :phone OR user.email = :email", { phone, email })
        .getOne();

    if (user) {
      const updatedUser = await this.updateUser({ id: user.id, phone, firstName, email });

      return updatedUser.raw[0];
    }

    return this.createUser({
      phone,
      firstName,
      email,
      anonymous: true,
      role: "user",
    });
  }
}
