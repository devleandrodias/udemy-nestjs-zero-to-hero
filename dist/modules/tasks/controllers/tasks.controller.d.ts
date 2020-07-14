import { ITask } from '../models/task.model';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { TaskService } from '../services/tasks.service';
import { UpdateTaskDto } from '../dtos/update-task.dto';
export declare class TaskController {
    private readonly _service;
    constructor(_service: TaskService);
    getAllTasks(): ITask[];
    getTaskById(id: string): ITask;
    createTask(data: CreateTaskDto): ITask;
    updateTask(id: string, data: UpdateTaskDto): ITask;
    deleteTask(id: string): void;
}
