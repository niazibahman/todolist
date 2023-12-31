import EditItemTaskRepository from "@/core/domain/repositories/editItemTaskRepository";
import { EditItemDataSource } from "../dataSoureses/editItemDtatSource";

export default class EditItemTaskRepositoryImplement implements EditItemTaskRepository{
    dataSource : EditItemDataSource;
    constructor(deleteDataSources : EditItemDataSource){
        this.dataSource = deleteDataSources;
    }
    EditItemTask(id: number, item: string): Promise<boolean> {
        return this.dataSource.EditItemTasks(id,item);
    }
}