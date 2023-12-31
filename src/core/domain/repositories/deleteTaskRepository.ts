export default interface DeleteTaskRepository {
    DeleteTask(id:number,sort:boolean,type:number): Promise<boolean>;
}