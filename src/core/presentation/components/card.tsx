import { DeleteDataSourceImplement } from "@/core/data/dataSoureses/deleteDataSource";
import { EditItemDataSourceImplement } from "@/core/data/dataSoureses/editItemDtatSource";
import { EditStatusDataSourceImplement } from "@/core/data/dataSoureses/editStatusDtatSource";
import DeleteTaskRepositoryImplement from "@/core/data/repositories/deleteTaskRepositoriesImplement";
import EditItemTaskRepositoryImplement from "@/core/data/repositories/editItemTaskRepositoriesImplement";
import EditStatusTaskRepositoryImplement from "@/core/data/repositories/editStatusTaskRepositoriesImplement";
import { Task } from "@/core/domain/entities/task";
import { DeleteTasks } from "@/core/domain/usecases/deleteTask";
import { EditItemTasks, EditStatusTasks } from "@/core/domain/usecases/editTask";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Card({task}:{task:Task}){
    const router=useRouter();
    const [showAddModal,setShowAddModal]=useState<boolean>(false);
    const [newTaskText,setNewTaskText]=useState<string>("");
    const [inputEmpty,setInputEmpty]=useState<boolean>(false);
    const changeNewTaskText=(text:string)=>{setNewTaskText(text)}
    const editTask=async ()=>{
        if(newTaskText === ""){
            setInputEmpty(true);
            setTimeout(()=>{setInputEmpty(false)},3000)
        }else{
            const editTask = new EditItemTasks(new EditItemTaskRepositoryImplement(new EditItemDataSourceImplement()));
            const result = await editTask.Execute(Number(task.id),newTaskText);
            if(result === true){
                setShowAddModal(false);
                router.reload();
            }
        }
    }
    const showModalForEdit=()=>{
        setNewTaskText(task.item);
        setShowAddModal(true);
    }
    const deleteTask=async ()=>{
        const deleteData = new DeleteTasks(new DeleteTaskRepositoryImplement(new DeleteDataSourceImplement()));
        const result = await deleteData.Execute(Number(task.id),task.sort === "1"?true:false,Number(task.todoStatu));
        if(result === true){
            router.reload();
        }else{
            alert("somthing went wrong in delete");
        }
    }
    const changeStatusTask=async ()=>{
        const changeStatus = new EditStatusTasks(new EditStatusTaskRepositoryImplement(new EditStatusDataSourceImplement()));
        const result = await changeStatus.Execute(Number(task.id),task.sort === "1"?true:false,task.todoStatu === "1"?2:1);
        if(result === true){
            router.reload();
        }else{
            alert("somthing went wrong in change status");
        }
    }
    return(
    <div className="col-span-1 h-60 bg-gray-200 hover:shadow-lg rounded flex flex-col items-center px-4 py-4 my-4 space-y-2">
                {
            showAddModal && 
            <div onClick={(e)=>e.stopPropagation()} className="fixed inset-0 z-10 cursor-default bg-black bg-opacity-70 flex flex-col justify-center items-center">
                <div className="w-5/6 max-w-xl h-48 bg-gray-200 rounded flex flex-col items-center justify-around p-4 ">
                    <h3 className="font-semibold">add new task</h3>
                    <input onChange={(e)=>changeNewTaskText(e.target.value)} value={newTaskText} type="text" placeholder="please inter your task" className="w-4/6 h-10 rounded p-2 outline-none"/>
                    <span className="text-red-500 text-sm mb-2">{inputEmpty && "input can not be empty"}</span>
                    <div className="w-full flex flex-row items-center justify-evenly">
                        <button onClick={()=>setShowAddModal(false)} className="w-24 h-8 border border-gray-500 text-gray-500 rounded">cancel</button>
                        <button onClick={editTask} className="w-24 h-8 bg-green-600 text-white rounded">save</button>
                    </div>
                </div>
            </div>

        }
        <div className="w-full flex flex-row items-center justify-between">
            <span>id:</span>
            <span>{task.id}</span>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
            <span>title:</span>
            <h2 className="text-lg font-bold">{task.item}</h2>
        </div>
        <div className="w-full flex fle-col justify-end">
            <button onClick={showModalForEdit} className="w-20 h-8 rounded bg-blue-500 text-white mb-4">edit task</button>
        </div>
        <div className="w-full flex flex-row items-center justify-between">
            <span>status:</span>
            <button className={`w-24 h-6 flex flex-col justify-center items-center rounded ${task.todoStatu === "1" ? "bg-amber-400 text-black":"bg-green-600 text-white"}`}><span>{task.todoStatu === "1" ? "in progress":"done"}</span></button>
        </div>
        <hr className="w-full mb-2 bg-gray-700"/>
        <div className="w-full flex flex-row items-center justify-between mt-8">
            <button onClick={deleteTask} className="w-32 rounded h-8 bg-red-500 text-white">delete</button>
            <button onClick={changeStatusTask} className="w-32 rounded h-8 bg-blue-500 text-white">change status</button>
        </div>
    </div>
    );
}