import React, { useState } from 'react';

function Modify({ todo, settodos, close ,theme}) {
  const [title, settitle] = useState(todo.title);
  const [description, setdes] = useState(todo.description);
  function edit() {
    const updatedTime = new Date().toLocaleString();
    settodos((prev) => {
      const uptodo = prev.map((i) => {
        if (i.id === todo.id) {
          return { ...i, title, description ,time:updatedTime};
        }
        return i;
      });
      localStorage.setItem("todosList", JSON.stringify(uptodo));
      return uptodo;
    });
    close();
  }

  return (
    <div className='fixed inset-0 z-50 top-0 left-0 w-full h-full bg-black/ backdrop-blur-sm flex justify-center items-center' onClick={close}>
      <div className={`${theme==="light"?'h-[40vh] relative w-[60vh] bg-[#9ACBD0] rounded-md p-5 flex flex-col gap-5 items-center':'h-[40vh] relative w-[60vh] bg-[#3C3D37] rounded-md p-5 flex flex-col gap-5 items-center'}`} onClick={(e) => e.stopPropagation()}>
        <button
          className='absolute top-0 right-0 text-white bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-sm font-bold shadow-md transition'
          onClick={close}
        >x</button>
        <input value={title} onChange={(e) => settitle(e.target.value)} type="text" className='h-8 w-full p-3' placeholder='Enter todo title..' />
        <textarea value={description} onChange={(e) => setdes(e.target.value)} className='h-40 p-3 w-full' placeholder='Add Description...'></textarea>
        <button className='h-8 w-40 border border-black-400 bg-[#48A6A7] rounded text-white' onClick={edit}>Save Changes</button>
      </div>
    </div>
  );
}

export default Modify;
