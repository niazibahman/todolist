import AddTaskRepository from "../repositories/addTaskRepository";

export class AddTasks {
    repository: AddTaskRepository;

    constructor(taskRepository: AddTaskRepository) {
        this.repository = taskRepository
    }
    async Execute(item:string): Promise<boolean> {
      return this.repository.AddTasks(item);
    }
}