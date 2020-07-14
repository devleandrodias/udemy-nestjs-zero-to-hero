import { uuid } from 'uuidv4';
import { Injectable } from '@nestjs/common';

import { ITask, ETaskStatus } from '../models/task.model';

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
