import React from 'react'
import Todocard from './Todocard'

function Todosection({openModal,todo,settodo,setisopen}) {
  return (
    <div className='p-8 flex flex-col items-center justify-center gap-2'>
     <h2 className='text-2xl font-semibold text-[#006A71]'> Todo</h2>
     <button className='rounded-xl p-3 bg-[#9ACBD0] text-[#006A71] font-semibold' onClick={openModal}>Create Todo</button>
     <div className='flex gap-20 mt-10 flex-wrap justify-center items-center'>
      {todo.map(todos=>{return <Todocard todo={todos} settodos={settodo} open={setisopen}/>})}
     </div>
      </div>
  )
}

export default Todosection