import { EDIT_TASKS } from "@/core/constant/consttants";

export interface EditStatusDataSource{
    EditStatusTasks(id:number,sort:boolean,type:number):Promise<boolean>;
}
export class EditStatusDataSourceImplement implements EditStatusDataSource{
    async EditStatusTasks(id:number,sort:boolean,type:number): Promise<boolean> {
        const response= await fetch(EDIT_TASKS,{
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