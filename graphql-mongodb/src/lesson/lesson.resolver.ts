import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonsInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly _service: LessonService) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this._service.getLesson(id);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Query(() => {
    return [LessonType];
  })
  lessons() {
    return this._service.getLessons();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this._service.createLesson(createLessonInput);
  }

  @Mutation(() => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonsInput')
    { lessonId, studentsId }: AssignStudentsToLessonsInput,
  ): Promise<Lesson> {
    return this._service.assingStudentsToLesson(lessonId, studentsId);
  }
}
