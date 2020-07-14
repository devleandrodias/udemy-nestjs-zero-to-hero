import { ITask } from '../models/task.model';
import { CreateTaskDto } from '../dtos/create-task.dto';
export declare class TaskService {
    private tasks;
    getAllTasks(): ITask[];
    getTaskById(id: string): ITask;
    createTask(data: CreateTaskDto): ITask;
    deleteTask(id: string): void;
}
