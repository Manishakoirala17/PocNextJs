import React from 'react'
import Button from '../inputComponents/Button'


interface Props{
    handleChange:()=>void;
    setNewTask:React.Dispatch<React.SetStateAction<string|any>>
}
function AddTaskCard({handleChange,setNewTask}:Props) {

    return (
        <div className="w-full p-3 flex flex-col gap-3 justify-start items-start">
            <div className="flex justify-start items-center">
                <Button name='save' onHandleChange={handleChange} className="border-[1px] border-gray-100" />
            </div>
            <div>
                <textarea name="task" id="new_task" className="outline-none border-none resize-none text-black p-3" onChange={(e) => { setNewTask(e.target.value) }}></textarea>
            </div>
        </div>
    )
}

export default AddTaskCard