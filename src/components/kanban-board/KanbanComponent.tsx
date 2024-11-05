
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


    const[newTask,setNewTask]=useState('');
    
    
    const saveNewTask = (task:string,status:string)=>{
        const item: Task = {
            status:status,
            name: task
        }
        setTasks([...tasks, item])
       
        setIsAddNewTask(previous => ({
            ...previous, [status]: [...(previous[status] || []), false]
        }))
        
    }
    console.log(tasks);


    const onDrop = (status: string, position: number) => {
        if (activeCard === null) return;

        const taskToMove = tasks[activeCard];
        const updatedTasks = tasks.filter((_, index) => index !== activeCard);
        updatedTasks.splice(position, 0, { ...taskToMove, status });
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
                                                    <div>
                                                        <ItemCard key={taskIndex} index={taskIndex} taskDetail={task} setActiveCard={setActiveCard}></ItemCard>
                                                    </div>
                                                );
                                            })
                                        }

                                        {/* {
                                            tasks && tasks.map((task, taskIndex) => {
                                                return (
                                                    task.status === status &&
                                                    <div className="flex flex-col gap-2">
                                                      <DroppingArea onDrop={()=>onDrop(status,0)}/>
                                                          <ItemCard key={taskIndex} index={taskIndex} taskDetail={task} setActiveCard={setActiveCard}></ItemCard>
                                                          <DroppingArea onDrop={()=>onDrop(status,taskIndex+1)}/>
                                                    </div>
                                                    
                                                );
                                            })
                                        } */}
                                        {

                                            isAddNewTask[status]?.map((_, index) => (
                                            <AddTaskCard handleChange={()=>saveNewTask(newTask, status)} setNewTask={setNewTask}/>  
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