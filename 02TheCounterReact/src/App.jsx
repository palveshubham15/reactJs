import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  // let counter = 0;
  let [counter , setCounter] = useState(0);

  const addValue = ()=>{
    console.log("clicked!!!" , counter);
  
    setCounter(counter +1)
    if(counter>=20)setCounter(20)
  }

  const removeValue = ()=> {
    setCounter(counter -1);
    if(counter<=0) setCounter(0)
  }

  return (
    <>
      <h1>The Counter React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >add count </button>
      <br/>
      <button
      onClick = {removeValue}
      >remove count </button>

      <div>this is div no {counter}</div>
      
    </>
  )
}

export default App
