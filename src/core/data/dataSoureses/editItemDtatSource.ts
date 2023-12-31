import { EDIT_TASKS } from "@/core/constant/consttants";

export interface EditItemDataSource{
    EditItemTasks(id:number,item:string):Promise<boolean>;
}
export class EditItemDataSourceImplement implements EditItemDataSource{
    async EditItemTasks(id:number,item:string): Promise<boolean> {
        const response= await fetch(EDIT_TASKS,{
            method:'DELETE',
            headers:{
                "key": "Content-Type",
                "value": "application/vnd.api+json",
                "type": "text"
            },
            body:JSON.stringify({id,item})
        });
        return response.ok;
    }

}