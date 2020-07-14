"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const uuidv4_1 = require("uuidv4");
const common_1 = require("@nestjs/common");
const task_status_enum_1 = require("../enuns/task-status.enum");
let TaskService = class TaskService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        return this.tasks.find(x => x.id === id);
    }
    createTask(data) {
        const { title, description } = data;
        const task = {
            id: uuidv4_1.uuid(),
            title,
            description,
            status: task_status_enum_1.ETaskStatus.OPEN
        };
        this.tasks.push(task);
        return task;
    }
};
TaskService = __decorate([
    common_1.Injectable()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=tasks.service.js.map