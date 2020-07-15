import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { ETaskStatus } from '../enuns/task-status.enum';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn([ETaskStatus.OPEN, ETaskStatus.IN_PROGRESS, ETaskStatus.DONE])
  status: ETaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
