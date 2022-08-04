/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import { User, userSchema } from '../interfaces/User.interface';
import Service, { ServiceError } from './Base.service';
import UserModel from '../models/User.model';

class UserService extends Service<User> {
  private _NOT_FOUND: string;

  constructor(model = UserModel) {
    super(model);

    this._NOT_FOUND = 'User not found';
  }

  public async create(obj: User): Promise<User | ServiceError | any> {
    const parsed = userSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    const findUser = await this.model.findOne({ 
      where: {
        name: obj.name, email: obj.email,
      },
    });

    if (findUser) return { code: 400, message: 'User already exists' };

    const newUser = {
      name: obj.name,
      email: obj.email,
      password: obj.password,
      role: obj.role ? obj.role : 'customer',
    };

    const user = await this.model.create(newUser);

    if (!user) return { code: 400, message: 'User not created' };

    return { code: 200, findUser };
  }

  public async update(id: string, obj: User): Promise<User | ServiceError | any> {
    const parsed = userSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    const findUser = await this.model.findOne({ where: { id } });

    if (!findUser) return { code: 400, message: this._NOT_FOUND };
    
    const password = CryptoJS.MD5(obj.password).toString();

    const updatedUser = {
      name: obj.name,
      email: obj.email,
      password,
      role: obj.role,
    };

    const user = await this.model.update(updatedUser, { where: { id } });
    
    if (!user) return { code: 400, message: 'User not updated' };

    return { code: 200, findUser };
  }
}

export default UserService;