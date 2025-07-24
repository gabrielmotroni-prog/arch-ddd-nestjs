import { User, UserProps } from './user';

describe('User Unit Tests', () => {
  it('should be constructor', () => {
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

  it('should updateName method', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    const user = User.create(userProps);
    user.updateName('name_any_2');

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.props.name).toBe('name_any_2');
  });
  it('should updateSurname method', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    const user = User.create(userProps);
    user.updateSurname('surname_any_2');

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.props.surname).toBe('surname_any_2');
  });
  it('should updateEmail method', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    const user = User.create(userProps);
    user.updateEmail('email_any_2@mail.com');

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.props.email).toBe('email_any_2@mail.com');
  });
  it('should updatePassword method', () => {
    const userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };

    const user = User.create(userProps);
    user.updatePassword('password_any_2');

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.props.password).toBe('password_any_2');
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
