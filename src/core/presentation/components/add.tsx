import { AddDataSourceImplement } from "@/core/data/dataSoureses/addDataSource";
import AddTaskRepositoryImplement from "@/core/data/repositories/addTaskRepositoriesImplement";
import { AddTasks } from "@/core/domain/usecases/addTask";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AddCard(){
    const router=useRouter();
    const [showAddModal,setShowAddModal]=useState<boolean>(false);
    const [newTaskText,setNewTaskText]=useState<string>("");
    const [inputEmpty,setInputEmpty]=useState<boolean>(false);
    const changeNewTaskText=(text:string)=>{setNewTaskText(text)}
    const addTask=async ()=>{
        if(newTaskText === ""){
            setInputEmpty(true);
            setTimeout(()=>{setInputEmpty(false)},3000)
        }else{
            const addTask = new AddTasks(new AddTaskRepositoryImplement(new AddDataSourceImplement()));
            const result = await addTask.Execute(newTaskText);
            if(result === true){
                setShowAddModal(false);
                router.reload();
            }
        }
    }
    return(
    <div onClick={()=>setShowAddModal(true)} className="col-span-1 h-60 cursor-pointer bg-gray-200 hover:shadow-lg rounded flex flex-col justify-center items-center px-4 py-8 my-4 space-y-4">
        {
            showAddModal && 
            <div onClick={(e)=>e.stopPropagation()} className="fixed inset-0 z-10 cursor-default bg-black bg-opacity-70 flex flex-col justify-center items-center">
                <div className="w-5/6 max-w-xl h-48 bg-gray-200 rounded flex flex-col items-center justify-around p-4 ">
                    <h3 className="font-semibold">add new task</h3>
                    <input onChange={(e)=>changeNewTaskText(e.target.value)} value={newTaskText} type="text" placeholder="please inter your task" className="w-4/6 h-10 rounded p-2 outline-none"/>
                    <span className="text-red-500 text-sm mb-2">{inputEmpty && "input can not be empty"}</span>
                    <div className="w-full flex flex-row items-center justify-evenly">
                        <button onClick={()=>setShowAddModal(false)} className="w-24 h-8 border border-gray-500 text-gray-500 rounded">cancel</button>
                        <button onClick={addTask} className="w-24 h-8 bg-green-600 text-white rounded">save</button>
                    </div>
                </div>
            </div>

        }
        <span className="text-9xl">+</span>
    </div>
    );
}