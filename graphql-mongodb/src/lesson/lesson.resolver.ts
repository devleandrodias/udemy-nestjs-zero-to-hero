import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly _service: LessonService) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this._service.getLesson(id);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Mutation(() => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this._service.createLesson(name, startDate, endDate);
  }
}
