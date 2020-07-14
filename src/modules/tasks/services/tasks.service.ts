import { uuid } from 'uuidv4';
import { Injectable } from '@nestjs/common';

import { ITask } from '../models/task.model';
import { ETaskStatus } from '../enuns/task-status.enum';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  public getAllTasks = (): ITask[] => this.tasks;

  public createTask(title: string, description: string): ITask {
    const task: ITask = {
      id: uuid(),
      title,
      description,
      status: ETaskStatus.OPEN
    };

    this.tasks.push(task);

    return task;
  }
}
