import { Repository, EntityRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async singUp({ username, password }: AuthCredentialsDto): Promise<void> {
    const user = new User();

    user.username = username;
    user.password = password;

    await user.save();
  }
}
