import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/hellouser')
  helloUser() {
    return 'Hello World';
  }
}
