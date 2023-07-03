import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDTO) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: data.username }, { name: data.name }],
      },
    });

    if (user) {
      throw new BadRequestException('User Already Exists');
    }

    const passwordHashed = await hash(data.password, 10);

    return await this.prisma.user.create({
      data: {
        ...data,
        password: passwordHashed,
      },
    });
  }
}
