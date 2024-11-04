import { useState } from "react"
import { Task } from "./KanbanComponent"

interface Props {
    taskDetail: Task
}
export default function ItemCard(props: Props) {
    const { name, status } = props.taskDetail

    const [isOpenEdit, setIsOpenEdit] = useState(false);



    return <div
        className="w-full border relative  border-[#3c444c] rounded-md p-4 flex flex-col gap-4 justify-start"
        onMouseOver={() => setIsOpenEdit(true)}
        onMouseLeave={() => setIsOpenEdit(false)}
    >
        <p className="w-full text-start text-sm">{status}</p>
        <p className="w-full text-start">{name}</p>
        {
            isOpenEdit && name != '' &&
            < div className="text-xs bg-[#3c444c] absolute right-0 px-4 py-2 top-0">
                Edit
            </div>
        }

    </div >
}