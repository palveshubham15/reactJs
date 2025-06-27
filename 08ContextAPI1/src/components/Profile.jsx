import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
const {user} = useContext(UserContext)

  if(!user)return <h1>please Login</h1>

  return (<h2>Welcome {user.username}</h2>)
}

export default Profile