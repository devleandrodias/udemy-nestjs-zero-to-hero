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

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;

    const lesson = this._repository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this._repository.save(lesson);
  }
}
