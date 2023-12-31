import { Task } from "@/core/domain/entities/task";
import Card from "./card";
import AddCard from "./add";

export default function List({tasks}:{tasks:Task[]}){
    return(
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
            tasks.length === 0 ? 
            <div>No data found</div>
            :tasks.map((item,index)=><Card task={item} key={index}/>)
        }
        <AddCard/>
    </div>
    );
}