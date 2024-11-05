
'use client'
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import DroppingArea from "./DroppingArea";
import AddTaskCard from "./AddTaskCard";

export interface Task {
    status: string | undefined,
    name: string | undefined,
}
export default function KanbanComponent() {
    const statusList = ["Todo", "In Progress", "Pending", "Completed", "Test", "Re-Test", "Closed"];

    const [tasks, setTasks] = useState<Task[]>([])
    const [activeCard, setActiveCard] = useState<number | null>(null)




    const [isAddNewTask, setIsAddNewTask] = useState<{ [status: string]: boolean[] }>({})
    function handleAddTask(status: string) {

        setIsAddNewTask(previous => ({
            ...previous, [status]: [...(previous[status] || []), true]
        }))
    }


    const [newTask, setNewTask] = useState('');
    const saveNewTask = (task: string, status: string) => {
           const newTask = task.trim();
        if (newTask.length !== 0) {
            const item: Task = {
                status: status,
                name: newTask
            }
            setTasks([...tasks, item])

            setIsAddNewTask(previous => ({
                ...previous,
                [status]: []
            }));

        }


    }
    console.log(tasks);

    const onDrop = (status: string, dropIndex: number) => {
        if (activeCard === null || activeCard === undefined) return;  
    
        const taskToMove = tasks[activeCard];  
        const updatedTasks = [...tasks];  

        updatedTasks.splice(activeCard, 1); 
 
        
    
        const taskStatus = updatedTasks.filter(task=> task.status === status);

        if(taskStatus.length === 0){
            updatedTasks.push({...taskToMove,status})
        }else{
            updatedTasks.splice(dropIndex, 0, { ...taskToMove, status });
        }
    
        setTasks(updatedTasks);
    
        setActiveCard(null);
    };
    

    return (
        <>
            <div className="w-full h-full p-6 text-white overflow-x-auto ">
                <div className="w-full grid grid-flow-col">
                    {
                        statusList.map((status, index) => {
                            return (
                                <div className="flex w-[250px] flex-col  text-center" key={index}>
                                    <h3>{status}</h3>
                                    <div className={`grid grid-cols-1 gap-2 bg-[#30353c]  p-2`}>
                                        {
                                            tasks && tasks.map((task, taskIndex) => {
                                                return (
                                                    task.status === status &&
                                                    <div className="flex flex-col gap-2" >
                                                    <DroppingArea onDrop={()=>onDrop(status,0)}/>
                                                        <ItemCard key={taskIndex} index={taskIndex} taskDetail={task} setActiveCard={setActiveCard}></ItemCard>
                                                        <DroppingArea onDrop={()=>onDrop(status,taskIndex+1)}/>
                                                  </div>
                                                );
                                            })
                                        }
                                        {
                                            isAddNewTask[status]?.map((_, index) => (
                                                <AddTaskCard handleChange={() => saveNewTask(newTask, status)} setNewTask={setNewTask} />
                                            ))

                                        }
                                        <div className="my-4">
                                            <button onClick={() => handleAddTask(status)}>+ Add Task</button>
                                        </div>

                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>



        </>
    )
}