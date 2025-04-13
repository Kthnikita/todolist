import React from 'react'
import { Carousel } from "@material-tailwind/react";
function Crouselsec() {
  return (
     <div className='h-80  border-black '>
         <Carousel>
      <img
        src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVvdGV8ZW58MHx8MHx8fDA%3D"
        alt="image 1"
        className="h-full w-full "
      />
      <img
        src="https://images.unsplash.com/photo-1554290712-e640351074bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHF1b3RlfGVufDB8fDB8fHww"
        alt="image 2"
        className="h-full w-full "
      />
      <img
        src="https://plus.unsplash.com/premium_photo-1694743671394-60034a1b2f65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVvdGV8ZW58MHx8MHx8fDA%3D"
        alt="image 3"
        className="h-full w-full"
      />
    </Carousel>
     </div>
    
    
  )
}

export default Crouselsec