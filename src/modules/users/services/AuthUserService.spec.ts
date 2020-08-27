import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakesUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthUserService from './AuthUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authUser: AuthUserService;

describe('AuthUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    authUser = new AuthUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to auth', async () => {
    await createUser.execute({
      admin: true,
      email: 'johndoe@example.com',
      name: 'John Doe',
      password: '12345678',
    });

    const response = await authUser.execute({
      email: 'johndoe@example.com',
      password: '12345678',
    });

    expect(response).toHaveProperty('token');
  });

  it('should not be able to auth with non existing user', async () => {
    try {
      await authUser.execute({
        email: 'johndoe@example.com',
        password: '12345678',
      });
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
    }
  });

  it('should not be able to auth with worng password', async () => {
    await createUser.execute({
      admin: true,
      email: 'johndoe@example.com',
      name: 'John Doe',
      password: '12345678',
    });

    try {
      await authUser.execute({
        email: 'johndoe@example.com',
        password: 'wrong-password',
      });
    } catch (err) {
      expect(err).toBeInstanceOf(AppError);
    }
  });
});
