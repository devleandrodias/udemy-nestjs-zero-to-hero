import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  UseGuards,
  Req
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { GetUser } from '../decorators/get-user.decorator';
import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';
import { User } from '../entities/user.entity';

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

  @Get()
  @UseGuards(AuthGuard())
  getTest(@GetUser() user: User): string {
    console.log(user);
    return 'Passport token OK!';
  }
}
