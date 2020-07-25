import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { uuid } from 'uuidv4';
import { StudentType } from './student.types';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly _repository: Repository<Student>,
  ) {}

  async student(id: string): Promise<Student> {
    return this._repository.findOne({ id });
  }

  async students(): Promise<Student[]> {
    return this._repository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<StudentType> {
    const { firstName, lastName } = createStudentInput;

    const student = this._repository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this._repository.save(student);
  }
}
