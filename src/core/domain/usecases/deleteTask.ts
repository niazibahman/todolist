import TaskRepository from "../repositories/taskRepository";

export class EditStatusTasks {
    repository: TaskRepository;
    
    constructor(taskRepository: TaskRepository) {
        this.repository = taskRepository
    }
    async Execute(id:number,sort:boolean,type:number): Promise<boolean> {
      return this.repository.DeleteTask(id,sort,type);
    }
}