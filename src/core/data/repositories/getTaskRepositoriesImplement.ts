import GetTaskRepository from "@/core/domain/repositories/getTaskRepository";
import { GetDataSource } from "../dataSoureses/getDataSource";
import { Task } from "@/core/domain/entities/task";

export default class GetTaskRepositoryImplement implements GetTaskRepository{
    dataSource : GetDataSource;
    constructor(getDataSources : GetDataSource){
        this.dataSource = getDataSources;
    }
    GetTasks(): Promise<Task[]> {
        return this.dataSource.getTasks();
    }
}