import {
  Entity,
  Column,
  Unique,
  BaseEntity,
  PrimaryGeneratedColumn
} from 'typeorm';

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
}
