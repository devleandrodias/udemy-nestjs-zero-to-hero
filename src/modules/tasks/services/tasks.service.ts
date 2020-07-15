import { uuid } from 'uuidv4';
import { Injectable, NotFoundException } from '@nestjs/common';

import { ITask } from '../models/task.model';
import { ETaskStatus } from '../enuns/task-status.enum';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { GetTaskFilterDto } from '../dtos/get-tasks-filter.dto';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  getTasksWithFilter({ status, search }: GetTaskFilterDto): ITask[] {
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(
        task => task.title.includes(search) || task.description.includes(search)
      );
    }

    return tasks;
  }

  getTaskById(id: string): ITask {
    const found = this.tasks.find(x => x.id === id);

    if (!found) throw new NotFoundException(`Task with ID ${id} not found`);

    return found;
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

  updateStatusTask(id: string, { status }: UpdateTaskDto): ITask {
    const task = this.getTaskById(id);

    task.status = status;

    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(x => x.id !== id);
  }
}
