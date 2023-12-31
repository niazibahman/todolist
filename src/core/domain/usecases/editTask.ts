import TaskRepository from "../repositories/taskRepository";

export class EditStatusTasks {
    repository: TaskRepository;
    
    constructor(taskRepository: TaskRepository) {
        this.repository = taskRepository
    }
    async Execute(id:number,sort:boolean,type:number): Promise<boolean> {
      return this.repository.EditStatusTask(id,sort,type);
    }
}
export class EditItemTasks {
    repository: TaskRepository;
    
    constructor(taskRepository: TaskRepository) {
        this.repository = taskRepository
    }
    async Execute(id:number,item:string): Promise<boolean> {
      return this.repository.EditItemTask(id,item);
    }
}