import { CreateUserDTO } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { Body, Controller, Injectable, Post } from '@nestjs/common';

@Injectable()
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return await this.userService.createUser(data);
  }
}
