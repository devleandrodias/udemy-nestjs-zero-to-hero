import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column({ name: 'start_name' })
  startName: string;

  @Column({ name: 'last_name' })
  lastName: string;
}
