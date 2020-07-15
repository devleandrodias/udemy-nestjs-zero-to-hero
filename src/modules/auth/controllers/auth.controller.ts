import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('/singup')
  async singUp(@Body(ValidationPipe) data: AuthCredentialsDto): Promise<void> {
    return await this._authService.singUp(data);
  }

  @Post('/singin')
  async singIn(
    @Body(ValidationPipe) data: AuthCredentialsDto
  ): Promise<{ accessToken: string }> {
    return await this._authService.singIn(data);
  }
}
