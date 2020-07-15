import { ETaskStatus } from '../enuns/task-status.enum';

export class GetTaskFilterDto {
  status: ETaskStatus;
  search: string;
}
