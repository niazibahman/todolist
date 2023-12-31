import DeleteTaskRepository from "../repositories/deleteTaskRepository";

export class EditStatusTasks {
    repository: DeleteTaskRepository;
    
    constructor(taskRepository: DeleteTaskRepository) {
        this.repository = taskRepository
    }
    async Execute(id:number,sort:boolean,type:number): Promise<boolean> {
      return this.repository.DeleteTask(id,sort,type);
    }
}