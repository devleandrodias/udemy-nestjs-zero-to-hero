import {
  Entity,
  Column,
  Unique,
  BaseEntity,
  PrimaryGeneratedColumn
} from 'typeorm';
import { hash } from 'bcrypt';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  salt: string;

  async validatePassword(password: string): Promise<boolean> {
    const passwordHash = await hash(password, this.salt);
    return passwordHash === this.password;
  }
}
