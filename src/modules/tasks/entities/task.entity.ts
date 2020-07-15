import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ETaskStatus } from '../enuns/task-status.enum';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: ETaskStatus;
}
