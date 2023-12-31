import { DELETE_TASKS } from "@/core/constant/consttants";

export interface DeleteDataSource{
    DeleteTasks(id:number,sort:boolean,type:number):Promise<boolean>;
}
export class DeleteDataSourceImplement implements DeleteDataSource{
    async DeleteTasks(id:number,sort:boolean,type:number): Promise<boolean> {
        const response= await fetch(DELETE_TASKS,{
            method:'DELETE',
            headers:{
                "key": "Content-Type",
                "value": "application/vnd.api+json",
                "type": "text"
            },
            body:JSON.stringify({id,sort,type})
        });
        return response.ok;
    }

}