import { Injectable, NotFoundException } from '@nestjs/common';

import { ETaskStatus } from '../enuns/task-status.enum';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { GetTaskFilterDto } from '../dtos/get-tasks-filter.dto';
import { TaskRepository } from '../repositories/task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskRepository)
    private readonly _repository: TaskRepository
  ) {}
  // getAllTasks(): ITask[] {
  //   return this.tasks;
  // }
  // getTasksWithFilter({ status, search }: GetTaskFilterDto): ITask[] {
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       task => task.title.includes(search) || task.description.includes(search)
  //     );
  //   }
  //   return tasks;
  // }

  async getTaskById(id: number): Promise<Task> {
    const found = await this._repository.findOne(id);

    if (!found) throw new NotFoundException(`Task with ID ${id} not found`);

    return found;
  }

  async createTask(data: CreateTaskDto): Promise<Task> {
    return this._repository.createTask(data);
  }

  // updateStatusTask(id: string, status: ETaskStatus): ITask {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(x => x.id !== found.id);
  // }
}
