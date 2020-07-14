import { uuid } from 'uuidv4';
import { Injectable } from '@nestjs/common';

import { ITask } from '../models/task.model';
import { ETaskStatus } from '../enuns/task-status.enum';
import { CreateTaskDto } from '../dtos/create-task.dto';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  public getAllTasks(): ITask[] {
    return this.tasks;
  }

  public getTaskById(id: string): ITask {
    return this.tasks.find(x => x.id === id);
  }

  public createTask(data: CreateTaskDto): ITask {
    const { title, description } = data;

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
