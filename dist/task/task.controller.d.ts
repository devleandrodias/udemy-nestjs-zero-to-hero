import { TaskService } from './task.service';
import { ITask } from './task.model';
export declare class TaskController {
    private readonly _service;
    constructor(_service: TaskService);
    getAllTasks(): ITask[];
}
