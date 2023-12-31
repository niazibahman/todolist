import { Task } from "../entities/task";
import TaskRepository from "../repositories/taskRepository";

export class GetTasks {
    repository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.repository = taskRepository
    }
    async Execute(): Promise<Task[]> {
      return this.repository.GetTasks();
    }
}