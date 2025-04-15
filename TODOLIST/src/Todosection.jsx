import React, { useState } from 'react'
import Todocard from './Todocard'

function Todosection({openModal,todo,settodo,close,theme}) {
  const[view,setview]=useState(localStorage.getItem("view")||"");
  function toggel(){
    if(view=="grid"){
      setview("list");
      localStorage.setItem("view","list");
    }
    else{
      setview("grid");
      localStorage.setItem("view","grid");
    }
  }
  return (
    <div className='p-8 flex flex-col items-center justify-center gap-2'>
     <h2 className='text-2xl font-semibold text-[#006A71]'> Todo</h2>
     <div className='flex gap-10'>
     <button className={`${theme==="light"?"bg-[#9ACBD0]":" bg-[#3C3D37]"} " text-white border border-black-400 font-semibold shadow-[4px_4px_10px_rgba(0,0,0,0.3)] p-5 rounded-xl "`} onClick={openModal}>Create Todo</button>
     <button className={`${theme==="light"?"bg-[#9ACBD0]":" bg-[#3C3D37]"} " text-white border border-black-400 font-semibold shadow-[4px_4px_10px_rgba(0,0,0,0.3)] p-5 rounded-xl "`} onClick={toggel}>{view==="grid"?"🗳️":"🗒️"}</button>
     </div>
     <div className='flex gap-20 mt-10 flex-wrap justify-center items-center'>
      {todo.map(todos=>{return <Todocard todo={todos} settodos={settodo} open={openModal} close={close} view={view} theme={theme}/>})}
     </div>
      </div>
  )
}

export default Todosection
      