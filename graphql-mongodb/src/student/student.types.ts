import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('student')
export class StudentType {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
