import { Injectable } from '@nestjs/common';
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
    await this._repository.singUp(data);
  }
}
