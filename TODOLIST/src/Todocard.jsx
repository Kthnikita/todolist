import React, { useState } from 'react'
function Todocard({todo,settodos,open}) {
  function remove(){
    settodos((prev)=>{
      const uptodo=prev.filter((i)=>{
          if(i.id!==todo.id){
           return i;
          }
      })
      JSON.stringify(localStorage.setItem("todosList",JSON.stringify(uptodo)));
      return uptodo;
       })
  }
  function toggel(){
    settodos((prev)=>{
       const newtodo=prev.map((i)=>{
           if(i.id===todo.id){
            i.iscompleted=!i.iscompleted;
            return i;
           }
           return i;
       })
       JSON.stringify(localStorage.setItem("todosList",JSON.stringify(newtodo)));
       return newtodo;
        })
    }
  return (
    <div className='h-[300px] rounded-lg p-3 w-[300px] bg-[#48A6A7] flex flex-col justify-between'>
    <div className='flex flex-col gap-3'>
      <div className='flex justify-between items-center'>
        <h2 className='font-semibold text-lg text-white'>{todo.title}</h2>
        <button onClick={toggel}>
          {todo.iscompleted ? "✅" : <div className='h-4 w-4 border border-black rounded' />}
        </button>
      </div>
  
      <h4 className='font-semibold text-white text-sm'>Description</h4>
      <p className='text-white text-sm'>{todo.description}</p>
    </div>
  
    <div className='flex justify-center'>
      <button
        className='h-8 w-20 border border-black bg-red-300 rounded hover:bg-red-400 transition'
        onClick={remove}
      >
        Remove
      </button>
    </div>
  </div>
  )
}

export default Todocard
