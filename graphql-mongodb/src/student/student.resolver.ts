import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.types';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private readonly _service: StudentService) {}

  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<StudentType> {
    return this._service.createStudent(createStudentInput);
  }

  @Query(() => StudentType)
  student(@Args('id') id: string): Promise<Student> {
    return this._service.student(id);
  }

  @Query(() => [StudentType])
  students(): Promise<Student[]> {
    return this._service.students();
  }
}
