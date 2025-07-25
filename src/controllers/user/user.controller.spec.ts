import { Test, TestingModule } from '@nestjs/testing';
import { User, UserProps } from '../../domain/user/user';
import { UserController } from './user.controller';
import { AddUserUseCase } from '../../usecases/user/add-user-usecase';

describe('UserController', () => {
  let userController: UserController;
  let addUserUseCase: AddUserUseCase;

  beforeEach(async () => {
    const userProps: UserProps = {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      password: 'XXXXXXXXXXX',
    };

    const user = User.create(userProps);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: AddUserUseCase,
          useValue: { create: jest.fn().mockResolvedValue(user) },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    addUserUseCase = module.get<AddUserUseCase>(AddUserUseCase);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(addUserUseCase).toBeDefined();
  });

  it('should create a user', async () => {
    const dto = {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      password: 'XXXXXXXXXXX',
    };

    await userController.create(dto);

    expect(addUserUseCase.create).toHaveBeenCalledWith(dto);
    //expect(result).toBeInstanceOf(dto);
  });
});
