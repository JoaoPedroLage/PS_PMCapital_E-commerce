/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from './Base.controller';
import { User } from '../interfaces/User.interface';
import UserService from '../services/User.service';

class UserController extends Controller<User> {
  private $route: string;
  
  constructor(
    service = new UserService(),
    route = '/Users',
  ) {
    super(service);
    this.$route = route; 
  }
  
  get route() {
    return this.$route;
  }
  
  create = async (
    req: RequestWithBody<User>,
    res: Response<User | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
  
    try {
      const user = await this.service.create(body);
      const { code, message, findUser } = user;
  
      if (!user) {
        return res.status(500).json({ error: this.errors.internal });
      }
  
      if ('error' in user) {
        return res.status(400).json(user);
      }

      if (message) return res.status(code).json(message);

      return res.status(code).json(findUser);
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  findByPk = async (
    req: Request<{ id: string }>,
    res: Response<User | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
  
    if (!id) return res.status(400).json({ error: this.errors.requiredId });
  
    try {
      const user = await this.service.findByPk(id);
  
      return user
        ? res.json(user)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  update = async (
    req: Request<{ id: string }>,
    res: Response<User | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
  
    const { body } = req;
  
    if (Object.keys(body).length === 0) return res.status(400).json();
  
    try {
      const user = await this.service.update(id, body);
      const { code, message, findUser } = user;
  
      if (!user) {
        return res.status(404).json({ error: this.errors.notFound });
      }
  
      if (message) return res.status(code).json(message);

      return res.status(code).json(findUser);
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  destroy = async (
    req: Request<{ id: string }>,
    res: Response<User | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
  
    if (!id) return res.status(400).json({ error: this.errors.requiredId });
  
    try {
      const user = await this.service.destroy(id);
  
      if (!user) {
        return res.status(404).json({ error: this.errors.notFound });
      }
  
      return res.status(204).json(user);
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}
  
export default UserController;
