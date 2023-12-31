import DeleteTaskRepository from "@/core/domain/repositories/deleteTaskRepository";
import { DeleteDataSource } from "../dataSoureses/deleteDataSource";

export default class DeleteTaskRepositoryImplement implements DeleteTaskRepository{
    dataSource : DeleteDataSource;
    constructor(deleteDataSources : DeleteDataSource){
        this.dataSource = deleteDataSources;
    }
    DeleteTask(id: number, sort: boolean, type: number): Promise<boolean> {
        return this.dataSource.DeleteTasks(id,sort,type);
    }
}