import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export type UsernameAndEmailDTO = {
  username: string;
  email: string;
};

export type UserCreatedDTO = {
  id: string;
  createdAt: Date;
} & CreateUserDTO;
