import { Task } from "../entities/task";

export default interface TaskRepository {
    GetTasks(): Promise<Task[]>;
    AddTasks(item:string): Promise<boolean>;
    EditStatusTask(id:number,sort:boolean,type:number): Promise<boolean>;
    EditItemTask(id:number,item:string): Promise<boolean>;
    DeleteTask(id:number,sort:boolean,type:number): Promise<boolean>;
}