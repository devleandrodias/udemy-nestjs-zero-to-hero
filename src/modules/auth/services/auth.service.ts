import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _repository: UserRepository
  ) {}

  async singUp(data: AuthCredentialsDto): Promise<void> {
    return await this._repository.singUp(data);
  }

  async singIn(data: AuthCredentialsDto): Promise<string> {
    const username = await this._repository.validateUserPassword(data);

    if (!username) throw new UnauthorizedException('Invalid credentials');

    return username;
  }
}
