import {
  UsernameAndEmailDTO,
  UserCreatedDTO,
  CreateUserDTO,
} from 'src/users/dtos/create-user.dto';
import { IUserRepository } from '../user.repository';
import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByUsernameOrEmail(
    data: UsernameAndEmailDTO,
  ): Promise<UserCreatedDTO> {
    return await this.prisma.user.findFirst({
      where: {
        OR: [{ username: data.username }, { email: data.email }],
      },
    });
  }

  async save(data: CreateUserDTO): Promise<UserCreatedDTO> {
    return await this.prisma.user.create({
      data,
    });
  }
}
