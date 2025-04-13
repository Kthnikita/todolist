import React from 'react'
function Navbar() {
  return (
    <div className='h-16 p-5 gap-3 flex justify-start bg-[#48A6A7] items-center '>
    <div className='h-8 w-8 rounded-full bg-[#9ACBD0] '>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTp8Gf5mIADYi5HBo_cgBWzXDA5USi_P16Q&s" alt="" className='h-8 w-8 rounded-full '/>
    </div>
    <h2 className='font-semibold text-lg italic text-white '>TODO APP</h2>
    </div>
  )
}

export default Navbar