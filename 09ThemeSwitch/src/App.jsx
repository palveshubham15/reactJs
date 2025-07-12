import { useState } from 'react'
import './App.css'
import Toggler from './components/toggler';
import { createContext } from 'react';

const ThemeContext = createContext({});

function App() {
  const [theme, setTheme] = useState("black");
  const [color , setColor] = useState("white");

  

  return (
    <>
    <ThemeContext.Provider value={{theme , setTheme , color , setColor}}>
      <div className='text-center h-80 w-80 flex justify-center items-center' style={{backgroundColor:theme , color:color , border:"red solid 2px"}}>
        BOX
        <Toggler/>
      </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App
export {ThemeContext}
