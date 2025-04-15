import React, { useState } from 'react';
import Modify from './Modify';

function Todocard({ todo, settodos, open, close, view, theme }) {
  const [showEdit, setShowEdit] = useState(false);

  function remove() {
    settodos(prev => {
      const uptodo = prev.filter(i => i.id !== todo.id);
      localStorage.setItem("todosList", JSON.stringify(uptodo));
      return uptodo;
    });
  }

  function toggle() {
    settodos(prev => {
      const newtodo = prev.map(i => {
        if (i.id === todo.id) {
          return { ...i, iscompleted: !i.iscompleted };
        }
        return i;
      });
      localStorage.setItem("todosList", JSON.stringify(newtodo));
      return newtodo;
    });
  }

  const baseStyle = `
    rounded-2xl border border-black-400 shadow-[4px_4px_10px_rgba(0,0,0,0.3)]
    ${theme === 'light' ? 'bg-[#48A6A7]' : 'bg-[#3C3D37]'}
    }
  `;

  const gridStyle = `
    ${baseStyle} h-[320px] w-[300px] p-5 flex flex-col justify-between
  `;

  const listStyle = `
    ${baseStyle} w-full  p-4 flex justify-between items-start gap-4
  `;

  return (
    <div className={view === 'grid' ? gridStyle : listStyle}>
      <div className={view === 'grid' ? 'flex flex-col gap-2' : 'flex-1'}>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-white truncate">{todo.title}</h2>
          <button onClick={toggle}>
            {todo.iscompleted ? "✅" : <div className='h-4 w-4 border border-white rounded' />}
          </button>
        </div>

        <div className="flex flex-col gap-1 mt-2">
          <h4 className="font-semibold text-white text-sm">Description</h4>
          <p className={`${view==="grid"?"text-white text-sm line-clamp-3":"text-white text-sm truncate w-60"}`}>{todo.description}</p>
        </div>

        {view === 'grid' && (
          <div className="text-center mt-2">
            <p className="font-light text-gray-200 text-xs italic">{todo.time}</p>
          </div>
        )}
      </div>

      <div className={`${view === 'grid' ? 'flex justify-center gap-4 mt-4' : 'flex flex-col gap-2'}`}>
        <button
          className="h-8 w-20 text-sm font-semibold border border-black-400 bg-red-300 text-white rounded"
          onClick={remove}
        >
          Remove
        </button>
        <button
          className="h-8 w-20 text-sm font-semibold border border-black-400 bg-green-400 text-white rounded"
          onClick={() => setShowEdit(true)}
        >
          Edit
        </button>
      </div>

      {view === 'list' && (
        <div className="text-right">
          <p className="font-light text-gray-200 text-xs italic">{todo.time}</p>
        </div>
      )}

      {showEdit && (
        <Modify theme={theme} todo={todo} settodos={settodos} close={() => setShowEdit(false)} />
      )}
    </div>
  );
}

export default Todocard;
