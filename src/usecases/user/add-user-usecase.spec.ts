import { UserRepositoryInterface } from 'src/data/protocols/db/user/user-repository.interface';
import { AddUserUseCase } from './add-user-usecase';
import { User, UserProps } from '../../domain/user/user';
describe('AddUserUseCase Unit Test', () => {
  let addUserUseCase: AddUserUseCase;
  let userRepositoryMock: jest.Mocked<UserRepositoryInterface>;

  beforeEach(() => {
    userRepositoryMock = {
      create: jest.fn(),
      find: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    addUserUseCase = new AddUserUseCase(userRepositoryMock);
  }) as jest.Mocked<UserRepositoryInterface>;

  it('should be defined', () => {
    expect(addUserUseCase).toBeDefined();
  });

  it('should be create new user', async () => {
    const userProps: UserProps = {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      password: 'XXXXXXXXXXX',
    };
    const expectUser = {
      ...userProps,
      _id: '1',
      createdAt: '2025-01-01',
      updatedAt: '2025-01-01',
    };

    // mock db
    userRepositoryMock.create.mockResolvedValue(expectUser);

    const user = User.create(userProps);
    const result = await addUserUseCase.create(user);

    expect(result).toEqual(expectUser);
    expect(userRepositoryMock.create).toHaveBeenCalledTimes(1);
  });
});
