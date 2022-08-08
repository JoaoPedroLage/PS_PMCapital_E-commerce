/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import { readFile } from 'fs/promises';
import { User } from '../interfaces/User.interface';

class TokenGenerator {
  jwt: typeof jwt;

  constructor() {
    this.jwt = jwt;
    this.createToken = this.createToken.bind(this);
    this.decodeToken = this.decodeToken.bind(this);
  }

  async createToken({ name, email, role }: User) {
    return this.jwt.sign(
      { name, email, role },
      await readFile('jwt.evaluation.key', 'utf8'),
      { expiresIn: '1d', algorithm: 'HS256' },
    );
  }

  async verifyToken(token: string) {
    return this.jwt.verify(token, await readFile('jwt.evaluation.key', 'utf8'));
  }

  async decodeToken(token: string): Promise<any> {
    return this.jwt.decode(token);
  }
}

export default TokenGenerator;
