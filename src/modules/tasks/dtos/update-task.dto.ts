import { ETaskStatus } from '../enuns/task-status.enum';

export class UpdateTaskDto {
  title: string;
  description: string;
  status: ETaskStatus;
}
