import { useState } from 'react'

function App() {
  const [color,setColor]=useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}}>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px=2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button
          onClick={()=>setColor("red")} className="outline-none px-3 py-1 rounded-full " style={{backgroundColor:"red"}}>red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-3 py-1 rounded-full " style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-3 py-1 rounded-full " style={{backgroundColor:"blue"}}>blu</button>
          <button onClick={()=>setColor("olive")} className="outline-none px-3 py-1 rounded-full " style={{backgroundColor:"olive"}}>olive</button>
 <button
          onClick={()=>setColor("pink")} className="outline-none px-3 py-1 rounded-full " style={{backgroundColor:"pink"}}>pink</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-3 py-1 rounded-full " style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor("black")} className="outline-none px-3 py-1 rounded-full " style={{backgroundColor:"black", color:"white"}}>black</button>
          <button onClick={()=>setColor("lavender")} className="outline-none px-3 py-1 rounded-full " style={{backgroundColor:"lavender"}}>lavender</button>
        </div>
        
      </div>
    </>
  )
}

export default App
