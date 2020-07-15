import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Task } from '../entities/task.entity';
import { ETaskStatus } from '../enuns/task-status.enum';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { GetTaskFilterDto } from '../dtos/get-tasks-filter.dto';
import { TaskRepository } from '../repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskRepository)
    private readonly _repository: TaskRepository
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return await this._repository.find();
  }

  async getTasksWithFilter({
    status,
    search
  }: GetTaskFilterDto): Promise<Task[]> {
    let tasks = await this.getAllTasks();

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

  async getTaskById(id: number): Promise<Task> {
    const found = await this._repository.findOne(id);

    if (!found) throw new NotFoundException(`Task with ID ${id} not found`);

    return found;
  }

  async createTask(data: CreateTaskDto): Promise<Task> {
    return this._repository.createTask(data);
  }

  async updateStatusTask(id: number, status: ETaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await task.save();
    return task;
  }

  async deleteTask(id: number): Promise<void> {
    const found = await this.getTaskById(id);
    await this._repository.delete(found);
  }
}
