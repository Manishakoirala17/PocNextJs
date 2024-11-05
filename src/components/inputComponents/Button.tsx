import React from 'react'


interface Props{
    className?:string;
    name:string;
    onHandleChange:()=>void;

}
function Button({className , name , onHandleChange}:Props) {
  return (
   <button className={`${className} w-[80px] h-auto rounded-md outline-none`} onClick={onHandleChange}>{name}</button>
  )
}

export default Button