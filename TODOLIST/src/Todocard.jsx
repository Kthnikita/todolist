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
    <div className='h-[300px] rounded-lg p-3 w-[300px] bg-[#48A6A7] flex flex-col gap-3 '>
      <div className='flex justify-between items-center'>
      <h2 className='font-semibold'>{todo.title}</h2>
      <button onClick={toggel}>{todo.iscompleted?"✅" : <div className='h-4 w-4 border border-black rounded'/>}</button>   
      </div>
      <h4 className='font-semibold'>Description</h4>
      <p>{todo.description}</p>
      <button className=' h-8 w-20 border border-black bg-red-300 rounded' onClick={remove}>Remove</button>
      <button className=' h-8 w-20 border border-black bg-red-300 rounded' >Edit</button>
    </div>
  )
}

export default Todocard