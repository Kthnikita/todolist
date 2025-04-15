import Navbar from "./Navbar"
import Crousel from "./Crousel"
import Addtaskmodal from "./Addtaskmodal"
import Crouselsec from "./Crousel"
import Todosection from "./Todosection"
import { useState } from "react"
function App() {
  const detail=JSON.parse(localStorage.getItem("todosList"))||[];
  const intialtheme=localStorage.getItem("theme")||"";
  const [isopen,setisopen]=useState(false);
  const [todo,setdetail]=useState(detail);
  const[theme,settheme]=useState(intialtheme);
  function changetheme(){
   if(theme==="light"){
    settheme("dark");
    localStorage.setItem("theme","dark");
   }
   else{
    settheme("light");
    localStorage.setItem("theme","light");
   }
  }
  function openmodal(){
    setisopen(true);
  }
  function closemodal(){
    setisopen(false);
  }
  return (
    <div className={`${theme==="light"?"bg-gradient-to-r from-[#A0D8E6] to-[#FFFFFF]":"bg-gradient-to-r from-[#3C3D37] to-[#697565]"}`}>
      {isopen && <Addtaskmodal close={closemodal} settodo={setdetail}  openModal={openmodal} theme={theme} />}
      <Navbar changetheme={changetheme} theme={theme}/>
      <Crouselsec/>
      <Todosection openModal={openmodal} todo={todo} settodo={setdetail} close={closemodal} theme={theme} />
    </div>
  )
}

export default App
 
