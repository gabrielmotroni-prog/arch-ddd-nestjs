import { MongodbUserRepository } from './mongodb-user-repository';
import { Model } from 'mongoose';
import { UserModel } from '../../models/user/user.model';
import { User, UserProps } from '../../../../../domain/user/user';

// mock dos metodos da lib mongoose
const userModelMock = {
  create: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  findOneAndUpdate: jest.fn().mockResolvedValue({}), // simulando retorno,
  deleteOne: jest.fn(),
} as unknown as Model<UserModel>;

describe('MongodbUserRepository Unit Test', () => {
  let mongodbUserRepository: MongodbUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();

    mongodbUserRepository = new MongodbUserRepository(userModelMock);
  });
  it('should be defined', () => {
    expect(mongodbUserRepository).toBeDefined();
  });

  it('should create new user', async () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    const user = User.create(userProps); // criar classe domain
    await mongodbUserRepository.create(user); // chama repository

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(userModelMock.create).toHaveBeenCalledWith(user);
  });

  it('should find array the users', async () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    const user = User.create(userProps); // criar classe domain
    await mongodbUserRepository.create(user); // chama repository

    await mongodbUserRepository.find(); // chama repository

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(userModelMock.find).toHaveBeenCalledTimes(1);
  });

  it('should findById a user by id', async () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };
    const _id = 'any_id';

    const user = User.create(userProps); // criar classe domain
    await mongodbUserRepository.create(user); // chama repository

    await mongodbUserRepository.findById(_id); // chama repository

    const userMock = {
      _id: 'aa',
      name: 'João',
      surname: 'Silva',
      password: 'senhaSegura123',
      email: 'joao.silva@example.com',
      createdAt: '2025-03-01',
      updatedAt: '2025-03-01',
    };

    jest.spyOn(mongodbUserRepository, 'findById').mockResolvedValue(userMock);
    const users = await mongodbUserRepository.findById(_id);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(userModelMock.findOne).toHaveBeenCalledTimes(1);
    expect(users).toBe(users);
  });

  it('should be call update a user by id', async () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };
    const _id = 'any_id';

    const user = User.create(userProps); // criar classe domain
    await mongodbUserRepository.create(user); // chama repository

    await mongodbUserRepository.update(_id, user); // chama repository

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(userModelMock.findOneAndUpdate).toHaveBeenCalledTimes(1);
  });
});
