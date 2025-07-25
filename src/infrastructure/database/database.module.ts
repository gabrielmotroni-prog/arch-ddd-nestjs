import { Module } from '@nestjs/common';
import { MongodbModule } from './mongodb/mongodb.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './mongodb/models/user/user.model';
import { MongodbUserRepository } from './mongodb/repositories/user/mongodb-user-repository';

@Module({
  imports: [
    MongodbModule,
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],

  exports: [MongodbUserRepository, MongodbModule],
  providers: [MongodbUserRepository],
})
export class DatabaseModule {}
