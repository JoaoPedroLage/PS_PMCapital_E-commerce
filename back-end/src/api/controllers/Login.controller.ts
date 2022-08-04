/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import TokenGenerator from '../middlewares/tokenGenerator';
import LoginService from '../services/Login.service';

class LoginController {
  private $route: string;

  loginService: any;
  
  tokenGenerator: any;

  constructor(route = '/login') {
    this.loginService = new LoginService();
    this.tokenGenerator = new TokenGenerator();

    this.login = this.login.bind(this);
    this.validation = this.validation.bind(this);
    this.$route = route; 
  }
  
  get route() {
    return this.$route;
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const { code, token, message } = await this.loginService
      .login(email, password);

    if (!token) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(token);
  }

  async validation(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(400).json({ message: 'Unauthorized' });
    }

    const decodedUser = await this.tokenGenerator.decodeToken(authorization);

    return res.status(200).json(decodedUser);
  }
}

export default LoginController;