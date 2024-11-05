import React, { SetStateAction, useState } from "react"
import { Task } from "./KanbanComponent"
import Button from "../inputComponents/Button";



interface Props {
    taskDetail: Task;
    setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
    index:number;
    
}
export default function ItemCard({taskDetail,setActiveCard,index}: Props) {
    const { name, status } = taskDetail

    const [isOpenEdit, setIsOpenEdit] = useState(false);

    const [isedited,setIsEdited] = useState(false);

    const[changesTask,setChangesTask] = useState('');

    const[save,setSave]= useState(false);

    const saveChanges=()=>{
       setSave(true);
    }


    return(
        <article draggable onDragStart={()=>{setActiveCard(index)}} onDragEnd={()=>{setActiveCard(null)}}>
        <div
            className="w-full border relative  border-[#3c444c] rounded-md p-4 flex flex-col gap-4 justify-start"
            onMouseOver={() => setIsOpenEdit(true)}
            onMouseLeave={() => setIsOpenEdit(false)}
        >
          
            {
                isedited && <Button className={'border-[1px] border-gray-300'} name="save" onHandleChange={saveChanges}/>
            }
        
            {
                isOpenEdit && name != '' &&
                < div className="text-xs bg-[#3c444c] absolute right-0 px-4 py-2 top-0 cursor-pointer"  onClick={()=>{setIsEdited(true)}}>
                    Edit
                </div>
            }
            {
                isedited ? <textarea name="task" id="task" className="outline-none border-none resize-none text-black p-3" onChange={(e)=>{setChangesTask(e.target.value)}}>{taskDetail.name}</textarea> : <p>{taskDetail.name}</p>
            }
            {
               
            save && <p>{changesTask}</p>
                   
            }

            
        </div >
    </article>

    )


   


}