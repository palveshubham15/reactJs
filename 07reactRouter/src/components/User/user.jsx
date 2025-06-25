import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <>
        <div className="text-6xl m-10">User Id : {userid} </div>
        <div className="text-6xl m-10">username : ABC LMN</div>
    </>
  )
}

export default User