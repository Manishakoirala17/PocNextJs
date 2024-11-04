import React, { useState } from 'react';

interface Props{
    onDrop:()=>void;

}
function DroppingArea({onDrop}:Props) {
    const [showDropArea, setShowDropArea] = useState(false);

    const handleDragEnter = () => {
        setShowDropArea(true);
    };

    const handleDragLeave = () => {
        setShowDropArea(false);
    };

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault(); 
    };

    

    return (
        <section 
            onDragEnter={handleDragEnter} 
            onDragLeave={handleDragLeave} 
           onDrop={()=>{
            onDrop();
            setShowDropArea(false);
        }}
          onDrag={handleDragOver}
            
            className={`${showDropArea ? 'w-full h-auto opacity-200 border-[2px] border-dotted relative border-[#3c444c] rounded-md p-4 flex flex-col gap-4 justify-start ' : 'opacity-0 w-full h-1 p-0'}`}
        >
            Drop
        </section>
    );
}

export default DroppingArea;
