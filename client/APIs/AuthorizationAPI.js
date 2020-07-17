import HttpService from '../services/HttpService';

class AuthorizationAPI {
  constructor(httpService) {
    this.httpService = httpService;
  }

  async initiateSignUp(phone) {
  }

  async verifyCode(code, verificationToken) {
  }

  async signUp(signUpData, signUpToken) {

  }

  async authorize() {

  }

  async signIn(phone, password) {

  }

  async signOut() {

  }

  async initiateResetPasswordWithPhone(resetPasswordWithPhoneData) {

  }

  async verifyResetPasswordCode(verificationData) {

  }

  async resetPasswordWithPhone(resetPasswordWithPhoneData) {

  }

  async updatePassword(oldPassword, newPassword) {

  }
}

export default new AuthorizationAPI(HttpService);
