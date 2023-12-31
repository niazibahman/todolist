import { Task } from "../entities/task";
import GetTaskRepository from "../repositories/getTaskRepository";

export class GetTasks {
    repository: GetTaskRepository;

    constructor(taskRepository: GetTaskRepository) {
        this.repository = taskRepository
    }
    async Execute(): Promise<Task[]> {
      return this.repository.GetTasks();
    }
}