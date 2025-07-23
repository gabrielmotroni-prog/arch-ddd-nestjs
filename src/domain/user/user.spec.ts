import { User, UserProps } from './user';

describe('User Unit Tests', () => {
  it('should create a user', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    const user = User.create(userProps);

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.props).toEqual(userProps);
  });

  it('should be toJson method', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    const user = User.create(userProps);

    expect(user.toJson()).toStrictEqual({
      id: user.id,
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    });
  });
});
