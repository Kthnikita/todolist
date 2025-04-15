import React from 'react'
function Navbar({changetheme,theme}) {
  return (
    <div className={`${theme==="light"?"bg-[#48A6A7]":" bg-[#3C3D37]"} "h-16 p-5 gap-3 flex justify-start  items-center "`}>
    <div className='h-8 w-8 rounded-full bg-[#9ACBD0] '>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTp8Gf5mIADYi5HBo_cgBWzXDA5USi_P16Q&s" alt="" className='h-8 w-8 rounded-full '/>
    </div>
    <h2 className='font-semibold text-lg italic text-white '>TODO APP</h2>
    <button
      className={`${theme==="light"?"bg-[#9ACBD0]":" bg-[#3C3D37]"} "h-8 w-20 text-sm font-semibold border border-black-400 text-white rounded-xl ml-auto "`}
      onClick={changetheme}
    >
      {theme=="light"?"Light":"Dark"}
    </button>
    </div>
  )
}

export default Navbar
