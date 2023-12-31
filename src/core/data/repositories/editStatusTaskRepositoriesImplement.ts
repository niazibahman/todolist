import EditStatusTaskRepository from "@/core/domain/repositories/editStatusTaskRepository";
import { EditStatusDataSource } from "../dataSoureses/editStatusDtatSource";

export default class EditStatusTaskRepositoryImplement implements EditStatusTaskRepository{
    dataSource : EditStatusDataSource;
    constructor(deleteDataSources : EditStatusDataSource){
        this.dataSource = deleteDataSources;
    }
    EditStatusTask(id: number, sort: boolean, type: number): Promise<boolean> {
        return this.dataSource.EditStatusTasks(id,sort,type);
    }
}