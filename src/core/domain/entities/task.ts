export class Task {
    id: string;
    item: string;
    sort: string;
    todoStatu: string;
    addDate: string;
    completDate: string;
  
    constructor(id: string, item: string, sort: string, todoStatu: string, addDate: string, completDate: string){
      this.id = id;
      this.item = item;
      this.sort = sort;
      this.todoStatu = todoStatu;
      this.addDate = addDate;
      this.completDate = completDate;
    }
  }