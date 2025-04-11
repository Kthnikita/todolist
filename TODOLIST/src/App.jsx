import Navbar from "./Navbar"
import Crousel from "./Crousel"
import Addtaskmodal from "./Addtaskmodal"
import Crouselsec from "./Crousel"
import Todosection from "./Todosection"
import { useState } from "react"
function App() {
  const detail=JSON.parse(localStorage.getItem("todosList"))||[];
  const [isopen,setisopen]=useState(false);
  const [todo,setdetail]=useState(detail);
  function openmodal(){
    setisopen(true);
  }
  function closemodal(){
    setisopen(false);
  }
  return (
    <>
      {isopen && <Addtaskmodal close={closemodal} settodo={setdetail}/>}
      <Navbar/>
      <Crouselsec/>
      <Todosection openModal={openmodal} todo={todo} settodo={setdetail} setisopen={setisopen}/>
    </>
  )
}

export default App
 