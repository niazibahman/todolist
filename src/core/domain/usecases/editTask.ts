import EditItemTaskRepository from "../repositories/editItemTaskRepository";
import EditStatusTaskRepository from "../repositories/editStatusTaskRepository";

export class EditItemTasks {
    editItemRepository: EditItemTaskRepository;
    
    constructor(taskRepository: EditItemTaskRepository) {
        this.editItemRepository = taskRepository
    }
    async Execute(id:number,item:string): Promise<boolean> {
      return this.editItemRepository.EditItemTask(id,item);
    }
}
export class EditStatusTasks {
    editStatusrepository: EditStatusTaskRepository;
    
    constructor(taskRepository: EditStatusTaskRepository) {
        this.editStatusrepository = taskRepository
    }
    async Execute(id:number,sort:boolean,type:number): Promise<boolean> {
      return this.editStatusrepository.EditStatusTask(id,sort,type);
    }
}