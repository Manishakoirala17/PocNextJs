import React, { useState } from 'react';

interface Props {
    onDrop: () => void;
}

function DroppingArea({ onDrop }: Props) {
    const [showDropArea, setShowDropArea] = useState(false);

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();  
        setShowDropArea(true);  
    };

    const handleDragLeave = () => {
        setShowDropArea(false);  
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();  
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();  
        onDrop();  
        setShowDropArea(false);  
    };

    return (
        <section
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`transition-all duration-300 ${showDropArea ? 'opacity-100 border-2 border-dotted relative border-[#3c444c] rounded-md p-4 flex flex-col gap-4 justify-start' : 'opacity-0 h-1 p-0'}`}
        >
            {showDropArea ? 'Drop Here' : ''}
        </section>
    );
}

export default DroppingArea;
