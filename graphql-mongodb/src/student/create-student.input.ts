import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  @Field()
  firstName: string;

  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  @Field()
  lastName: string;
}
