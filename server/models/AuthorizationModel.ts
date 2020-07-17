import { User } from './UserModel';

export class UserSignInInput {
  public phone: string;

  public password: string;
}

export class InitiateSignUpInput {
  public phone: string;
}

export class VerificationInput {
  public code: string;

  public verificationToken: string;
}

export class SignUpInput {
  public firstName: string;

  public lastName: string;

  public password: string;

  public signUpToken: string;
}

export class InitiateResetPasswordWithPhoneDataInput {
  public phone: string;
}

export class ResetPasswordWithPhoneDataInput {
  public password: string;

  public resetPasswordToken: string;
}

export class ResetPasswordData {
  public user: User;

  public resetPasswordToken: string;
}
