import { Injectable } from '@nestjs/common';
import { ITask } from './task.model';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  public getAllTasks = (): ITask[] => this.tasks;
}
