import { TaskService } from '../services/tasks.service';
import { ITask } from '../models/task.model';
export declare class TaskController {
    private readonly _service;
    constructor(_service: TaskService);
    getAllTasks(): ITask[];
    createTask({ title, description }: ITask): ITask;
}
