import {
  CreateUserDTO,
  UserCreatedDTO,
  UsernameAndEmailDTO,
} from '../dtos/create-user.dto';

export abstract class IUserRepository {
  abstract findByUsernameOrEmail(
    data: UsernameAndEmailDTO,
  ): Promise<UserCreatedDTO>;

  abstract save(data: CreateUserDTO): Promise<UserCreatedDTO>;
}
