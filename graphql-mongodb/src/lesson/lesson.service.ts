import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { uuid } from 'uuidv4';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly _repository: Repository<Lesson>,
  ) {}

  async getLesson(id: string): Promise<Lesson> {
    return this._repository.findOne({ id });
  }

  async getLessons(): Promise<Lesson[]> {
    return this._repository.find();
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;

    const lesson = this._repository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students: [],
    });

    return this._repository.save(lesson);
  }

  async assingStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this._repository.findOne({ id: lessonId });
    lesson.students = [...lesson.students, ...studentIds];
    return this._repository.save(lesson);
  }
}
