import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserRepository } from '../repositories/user.repository';
import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _repository: UserRepository,
    private readonly _jwtSetvice: JwtService
  ) {}

  async singUp(data: AuthCredentialsDto): Promise<void> {
    return await this._repository.singUp(data);
  }

  async singIn(data: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const username = await this._repository.validateUserPassword(data);

    if (!username) throw new UnauthorizedException('Invalid credentials');

    const payload: JwtPayload = { username };

    const accessToken = await this._jwtSetvice.sign(payload);

    return { accessToken };
  }
}
