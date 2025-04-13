import React, { useState } from 'react'
import Modify from './Modify';
function Todocard({todo,settodos,open,close}) {
  const [showEdit, setShowEdit] = useState(false);
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
    <div className='h-[320px] rounded-2xl p-4 w-[300px] bg-[#48A6A7] flex flex-col justify-between border border-black-400  shadow-[4px_4px_10px_rgba(0,0,0,0.3)] p-5'>
  <div className='flex flex-col gap-2'>
    <div className='flex justify-between items-center'>
      <h2 className='font-semibold text-lg text-white truncate'>{todo.title}</h2>
      <button onClick={toggel}>
        {todo.iscompleted ? "✅" : <div className='h-4 w-4 border border-white rounded' />}
      </button>
    </div>

    <div className='flex flex-col gap-1'>
      <h4 className='font-semibold text-white text-sm'>Description</h4>
      <p className='text-white text-sm line-clamp-3'>{todo.description}</p>
    </div>
  </div>

  <div className='flex justify-center gap-4 mt-4'>
    <button
      className='h-8 w-20 text-sm font-semibold border border-black-400 bg-red-300 text-white rounded'
      onClick={remove}
    >
      Remove
    </button>
    <button
      className='h-8 w-20 text-sm font-semibold border border-black-400 bg-white/20 bg-green-300 text-white rounded'
      onClick={() => setShowEdit(true)}
    >
      Edit
    </button>
  </div>

  <div className='text-center mt-2'>
    <p className='font-light text-gray-200 text-xs italic'>{todo.time}</p>
  </div>

  <div>
    {showEdit && (
      <Modify todo={todo} settodos={settodos} close={() => setShowEdit(false)} />
    )}
  </div>
</div>

  )
}

export default Todocard
