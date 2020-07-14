import { uuid } from 'uuidv4';
import { Injectable } from '@nestjs/common';

import { ITask } from '../models/task.model';
import { ETaskStatus } from '../enuns/task-status.enum';
import { CreateTaskDto } from '../dtos/create-task.dto';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  getTaskById(id: string): ITask {
    return this.tasks.find(x => x.id === id);
  }

  createTask(data: CreateTaskDto): ITask {
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

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(x => x.id !== id);
  }
}
