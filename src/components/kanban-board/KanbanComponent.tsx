'use client'
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export interface Task {
    status: string | undefined,
    name: string | undefined,
}
export default function KanbanComponent() {
    const statusList = ["Todo", "In Progress", "Pending", "Completed", "Test", "Re-Test", "Closed"];

    const [tasks, setTasks] = useState<Task[]>([])


    useEffect(() => {
        setTasks([
            {
                status: "Todo",
                name: "Test1"
            },
            {
                status: "Todo",
                name: "Test Todo"
            },
            {
                status: "Todo",
                name: "Test Todo"
            },
            {
                status: "Todo",
                name: "Test Todo"
            },
            {
                status: "Todo",
                name: "Test Todo"
            },
            {
                status: "Todo",
                name: "Test Todo 1"
            },
            {
                status: "Completed",
                name: "Test 2"
            },
            {
                status: "Closed",
                name: "Test 3"
            }
        ])
    }, [])

    function handleAddTask(status: string) {
        const item: Task = {
            status,
            name: ''
        }
        setTasks([...tasks, item])
    }

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
                                                    <ItemCard key={taskIndex} taskDetail={task}></ItemCard>
                                                );
                                            })
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