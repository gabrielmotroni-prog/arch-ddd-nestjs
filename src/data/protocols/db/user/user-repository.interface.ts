import { UserModel } from 'src/infrastructure/database/mongodb/models/user/user.model';
import { User } from '../../../../domain/user/user';

export interface UserRepositoryInterface {
  create: (data: User) => Promise<UserModel>;
  find: () => Promise<UserModel[]>;
  findById: (id: string) => Promise<UserModel | null>;
  update: (id: string, dataUpdate: User) => Promise<UserModel | null>;
  remove: (id: string) => Promise<void>;
}
