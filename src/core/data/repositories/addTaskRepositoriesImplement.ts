import AddTaskRepository from "@/core/domain/repositories/addTaskRepository";
import { AddDataSource } from "../dataSoureses/addDataSource";

export default class AddTaskRepositoryImplement implements AddTaskRepository{
    dataSource : AddDataSource;
    constructor(addDataSources : AddDataSource){
        this.dataSource = addDataSources;
    }
    AddTasks(item: string): Promise<boolean> {
        return this.dataSource.AddTasks(item);
    }
}