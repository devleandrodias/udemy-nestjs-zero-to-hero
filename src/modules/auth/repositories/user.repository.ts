import { Repository, EntityRepository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException
} from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';
import { User } from '../entities/user.entity';
import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async singUp({ username, password }: AuthCredentialsDto): Promise<void> {
    const user = new User();

    user.salt = await genSalt();
    user.username = username;
    user.password = await this.generateHashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  private async generateHashPassword(
    password: string,
    salt: string
  ): Promise<string> {
    return await hash(password, salt);
  }
}
