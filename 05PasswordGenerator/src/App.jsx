import { useCallback, useEffect, useState ,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numA , setNumA] = useState(false)
  const [charA , setcharA] = useState(false)
  const [pass , setpass] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numA) str += "0123456789";
    if(charA) str += "!@#$%^&*_+-="; 

    for(let i = 0 ; i<length ; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);
    }
    setpass(pass);    
  } , [length , numA , charA , setpass])

  const copyClipboard = useCallback(() => {
  passRef.current?.select();
  window.navigator.clipboard.writeText(pass);
  setCopySuccess("Copied!");

  setTimeout(() => setCopySuccess(""), 2000); // Hide after 2 sec
}, [pass]);


  useEffect(()=>{passwordGenerator()} , [length,charA , numA , passwordGenerator])

  return (
    <>
      <h1 className='text-4xl text-center text-gray-700 w-full h-20 pt-2;'>Password Generator</h1>
      <div className='w-full max-w-2xl mx-auto shadow-md my-8 px-4 py-4 text-amber-300 rounded-lg text-2xl bg-gray-700'>
        <h2 className=' text-center m-1'>Password Generator</h2>
        <div className='flex'>
          <input type='text' readOnly placeholder='password' value={pass} className=' p-2 bg-white rounded-md w-full outline-none text-gray-600' ref={passRef}></input>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded h-max" onClick={()=>{copyClipboard()}}>Copy</button>
          

        </div>

        <div className='flex gap-x-2 text-sm mt-4' >
          <div className='flex items-center gap-x-1'>
              <input type='range'
              min={5} max={100}
              value={length} className='cursor-pointer'
              onChange = {(e)=>{setlength(e.target.value)}}
              />
              <label>length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input type='checkbox'
              checked={numA}
              onChange={(e)=>{setNumA(e.target.checked)}}
              />
              <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input type='checkbox'
              checked={charA}
              onChange={(e)=>{setcharA(e.target.checked)}}
              />
              <label>Charachters</label>
          </div>
          
        </div>
          


      </div>
      {copySuccess && (
            <div id="one" className="text-green-400 text-sm mt-2 w-full text-center">{copySuccess}</div>
          )}
    </>
  )
}

export default App
