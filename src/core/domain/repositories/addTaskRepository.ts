export default interface AddTaskRepository {
    AddTasks(item:string): Promise<boolean>;
}