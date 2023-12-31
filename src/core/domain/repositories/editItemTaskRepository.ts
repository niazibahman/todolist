export default interface EditItemTaskRepository {
    EditItemTask(id:number,item:string): Promise<boolean>;
}