"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./services/tasks.service");
const tasks_controller_1 = require("./controllers/tasks.controller");
let TaskModule = class TaskModule {
};
TaskModule = __decorate([
    common_1.Module({
        providers: [tasks_service_1.TaskService],
        controllers: [tasks_controller_1.TaskController]
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=tasks.module.js.map