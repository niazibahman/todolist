import { GET_TASKS } from "@/core/constant/consttants";
import { Task } from "@/core/domain/entities/task";

export interface GetDataSource{
    getTasks():Promise<Task[]>;
}
export class GetDataSourceImplement implements GetDataSource{
    async getTasks(): Promise<Task[]> {
        const response= await fetch(GET_TASKS);
        const  data = await response.json();
        const completedTodos:Task[] = data["completed"] ?? [];
        const uncompletedTodos:Task[] = data["uncompleted"] ?? [];
        return completedTodos.concat(uncompletedTodos) as Task[];
    }
}