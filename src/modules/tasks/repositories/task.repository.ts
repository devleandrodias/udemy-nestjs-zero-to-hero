import { Repository, EntityRepository } from 'typeorm';

import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { ETaskStatus } from '../enuns/task-status.enum';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(data: CreateTaskDto): Promise<Task> {
    const { title, description } = data;

    const task = new Task();

    task.title = title;
    task.description = description;
    task.status = ETaskStatus.OPEN;

    await task.save();

    return task;
  }
}
