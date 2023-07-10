import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { LoginService } from './login.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret:
        'C1265957C89A15B8DC85BD51FDEC4464CED95067AF20CF1A441A293E8F8FA133',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [LoginController],
  providers: [PrismaService, LoginService],
})
export class LoginModule {}
