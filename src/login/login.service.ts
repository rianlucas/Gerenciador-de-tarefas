import { JwtService } from '@nestjs/jwt';
import { SignInDTO } from './dtos/SignIn.dto';
import { PrismaService } from 'src/infra/database/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private JwtService: JwtService, private prisma: PrismaService) {}

  async signIn(data: SignInDTO) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: data.username,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isEqualPassword = await compare(data.password, user.password);

    if (!isEqualPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      username: user.name,
    };

    const token = await this.JwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
