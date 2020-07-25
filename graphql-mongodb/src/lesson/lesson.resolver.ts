import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private readonly _service: LessonService) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Query(() => LessonType)
  lesson() {
    return {
      id: '284975023987503987450293',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Mutation(() => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    this._service.createLesson(name, startDate, endDate);
  }
}
