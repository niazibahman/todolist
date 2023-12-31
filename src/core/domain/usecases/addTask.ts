import TaskRepository from "../repositories/taskRepository";

export class AddTasks {
    repository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.repository = taskRepository
    }
    async Execute(item:string): Promise<boolean> {
      return this.repository.AddTasks(item);
    }
}