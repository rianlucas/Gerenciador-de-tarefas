import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { SignInDTO } from './dtos/SignIn.dto';

@Controller()
export class LoginController {
  constructor(private LoginService: LoginService) {}

  @Post('/signIn')
  async signIn(@Body() SignInDTO: SignInDTO) {
    const token = await this.LoginService.signIn(SignInDTO);
    return token;
  }
}
