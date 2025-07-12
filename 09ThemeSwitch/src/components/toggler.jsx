import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Toggler() {
    const {theme , setTheme , color , setColor} = useContext(ThemeContext)

    const handler = (e)=>{
        e.preventDefault();
        if(theme==='black')
        {
            setTheme("white");
            setColor("black");
        }
        else
        {
            setTheme("black");
            setColor("white");
        }
    };

  return (
    <div>
        <button className='border-blue-800 border-solid border-2 bg-blue-400 rounded-md p-2 hover:bg-blue-600 hover:text-yellow-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out  ' onClick={handler}>
            submit
        </button>
    </div>
  )
}

export default Toggler