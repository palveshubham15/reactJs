import { useState } from 'react'
import './App.css'

function App() {
  let [color , setColor] = useState("black");

  const changeColor = (c)=>{
    setColor(color = c);
  }

  return (
    <>
      <div className = "fullscreen" style={{backgroundColor: color}}>
        <div className="btns">
          <button id="blackC" onClick={()=>setColor("black")}>black</button>
          <button id="yellowC" onClick={()=>setColor("yellow")}>yellow</button>
          <button id="redC" onClick={()=>setColor("red")}>red</button>
          <button id="greenC" onClick={()=>setColor("green")}>green</button>
        </div>
      </div>
    </>
  )
}

export default App
