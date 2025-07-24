import { InjectModel } from '@nestjs/mongoose';
import { UserRepositoryInterface } from 'src/data/protocols/db/user/user-repository.interface';
import { UserModel } from '../../models/user/user.model';
import { Model } from 'mongoose';
import { User } from 'src/domain/user/user';

export class MongodbUserRepository implements UserRepositoryInterface {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userCollection: Model<UserModel>,
  ) {}

  async create(data: User): Promise<UserModel> {
    const user = await this.userCollection.create(data);
    return user.save();
  }

  find(): Promise<UserModel[]> {
    return this.userCollection.find({}, { __v: false }).exec();
  }

  async findById(id: string): Promise<UserModel | null> {
    const user = await this.userCollection.findOne({ _id: { $eq: id } });
    return user;
  }

  async update(id: string, dataUpdate: User): Promise<UserModel | null> {
    const user = await this.userCollection.findOneAndUpdate({
      _id: { $eq: id },
      $set: dataUpdate,
    });
    return user;
  }
  async remove(id: string): Promise<void> {
    await this.userCollection.deleteOne({ _id: { $eq: id } }).exec();
  }
}
