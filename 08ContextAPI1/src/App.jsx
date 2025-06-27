import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Context API </h1>
     <Login/>
     <Profile/>
    </>
  )
}

export default App
