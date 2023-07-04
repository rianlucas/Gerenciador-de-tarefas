import { CreateUserDTO } from './dtos/create-user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { IUserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private repository: IUserRepository) {}

  async createUser(data: CreateUserDTO) {
    const user = await this.repository.findByUsernameOrEmail({
      username: data.username,
      email: data.email,
    });

    if (user) {
      throw new BadRequestException('User Already Exists');
    }

    const password = await hash(data.password, 10);

    return await this.repository.save({
      ...data,
      password,
    });
  }
}
