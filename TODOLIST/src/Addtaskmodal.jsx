import React, { useState } from 'react'

function Addtaskmodal({close,settodo,theme}) {
  const[title,settitle]=useState("");
  const[description,setdes]=useState("");
  function addtodo(){
    console.log(title);
   const newtodo={title,description,iscompleted:false,id:Date.now(),time: new Date().toLocaleString()}
   settodo((prev)=>{
    JSON.stringify(localStorage.setItem("todosList",JSON.stringify([...prev,newtodo])));
    return [...prev,newtodo]})
   close()
  }
  return (
    <div className='fixed inset-0 z-50 top-0 left-0 w-full h-full bg-black/ backdrop-blur-sm flex justify-center items-center' onClick={close}>
  <div className={`${theme==="light"?'h-[40vh] relative w-[60vh] bg-[#9ACBD0] rounded-md p-5 flex flex-col gap-5 items-center':'h-[40vh] relative w-[60vh] bg-[#3C3D37] rounded-md p-5 flex flex-col gap-5 items-center'}`} onClick={(e) => { e.stopPropagation() }}>
    <button
      className='absolute top-0 right-0 text-white bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-sm font-bold shadow-md transition'
      onClick={close}
    > x
    </button>
    <input value={title} onInput={(e) => settitle(e.target.value)} type="text" className='h-8 w-full p-3' placeholder='Enter todo title..' />
    <textarea value={description} onInput={(e) => setdes(e.target.value)} className='h-40 p-3 w-full' placeholder='Add Description...'></textarea>
    <button className='h-8 w-20 border border-black bg-[#48A6A7] rounded' onClick={addtodo}>Add Todo</button>
  </div>
</div>
  )
}

export default Addtaskmodal