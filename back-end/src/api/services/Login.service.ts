/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from 'crypto-js';
import TokenGenerator from '../middlewares/tokenGenerator';
import User from '../models/User.model';
import { ServiceError } from './Base.service';

class LoginService {
  private _tokenInstance: any;
  
  constructor() {
    this._tokenInstance = new TokenGenerator();

    this.login = this.login.bind(this);
  }

  async login(email: string, password: string): Promise<ServiceError | any> {
    const findUser = await User.findOne({ where: { email } });
    
    if (!findUser) return { code: 404, message: 'Incorrect email or password' };
    
    const encodedPassword = CryptoJS.MD5(password).toString();

    const verifyPassword = () => encodedPassword === findUser.password;

    if (!verifyPassword()) {
      return { code: 404, message: 'Incorrect email or password' };
    }

    const user = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
      role: findUser.role,
    };

    const token = await this._tokenInstance.createToken(user);

    return { code: 200, token };
  }
}

export default LoginService;