
export default function KanbanComponent() {
    const statusList = ["Todo", "In Progress", "Pending", "Completed", "Test", "Re-Test", "Closed"];

    const tasks = [
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
    ]
    return (
        <>
            <div className="w-full h-full p-6">
                <div className="w-full grid grid-flow-col gap-4">
                    {
                        statusList.map((status, index) => {
                            return (
                                <div className="flex  flex-col gap-4 text-center" key={index}>
                                    <h3>{status}</h3>
                                    <div className="grid grid-cols-1 gap-2 bg-red-100">
                                        {
                                            tasks.map((task, taskIndex) => {
                                                return (
                                                    task.status === status &&
                                                    <div key={taskIndex} className="w-full border border-red-600 p-4 flex flex-col justify-start">
                                                        <p className="w-full text-start">{task.name}</p>
                                                    </div>
                                                );
                                            })
                                        }
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