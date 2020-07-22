import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
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
}
