import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('/singup')
  async singUp(@Body() data: AuthCredentialsDto): Promise<void> {
    return await this._authService.singUp(data);
  }
}
