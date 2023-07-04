export type CreateUserDTO = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type UsernameAndEmailDTO = {
  username: string;
  email: string;
};

export type UserCreatedDTO = {
  id: string;
  createdAt: Date;
} & CreateUserDTO;
