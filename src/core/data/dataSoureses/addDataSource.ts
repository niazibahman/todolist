import { ADD_TASKS } from "@/core/constant/consttants";

export interface AddDataSource{
    AddTasks(item:string):Promise<boolean>;
}
export class AddDataSourceImplement implements AddDataSource{
    async AddTasks(item: string): Promise<boolean> {
        const response= await fetch(ADD_TASKS,{
            method:'POST',
            headers:{
                "key": "Content-Type",
                "value": "application/vnd.api+json",
                "type": "text"
            },
            body:JSON.stringify({item})
        });
        return response.ok;
    }

}