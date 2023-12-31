export default interface EditStatusTaskRepository {
    EditStatusTask(id:number,sort:boolean,type:number): Promise<boolean>;
}