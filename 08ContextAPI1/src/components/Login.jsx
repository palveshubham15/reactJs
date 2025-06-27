import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handle = (e)=>{
        e.preventDefault();
        setUser({username});
    }

  return (
    
    <div>
        <h1>Login Page</h1>
        <input type='text' placeholder='username' value = {username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type='text' placeholder='password' value = {password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handle}>Submit</button>

    </div>
  )
}

export default Login