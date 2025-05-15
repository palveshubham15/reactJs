import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let someObj = {
    naam : "Virat Kohli",
    age : 36, 
    Jersey_No:18
  }
  let arr = [1,2,3];
  return (
    <>
    <h1 className='bg-red-700 text-white rounded-2xl p-5 mb-5'>RCB</h1>
    
    {/* <Card channel = "chai Aur Code" myObj = {someObj} array={arr}/> */}
    <Card username = "KSP" nama="c1"/>
    <Card username = "SSP"nama ="c3"/>
    </>
  )
}

export default App
