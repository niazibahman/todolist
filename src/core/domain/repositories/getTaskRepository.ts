import { Task } from "../entities/task";

export default interface GetTaskRepository {
    GetTasks(): Promise<Task[]>;
}