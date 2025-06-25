import React, { useEffect , useState } from 'react'

function Github() {
  const [data1 , setdata1] = useState([]);

  useEffect(()=>{
    let url = 'http://api.github.com/users/palveshubham15';
    fetch(url)
    .then(Response => Response.json())
    .then(data => setdata1(data))
  } , [])

  return (
    
    <div className='text-5xl m-8 text-center bg-gray-500 text-white p-5 display-flex '>
        <img className='text-center' src={data1.avatar_url}/>
        Github Followers : {data1.followers}
    </div>
    
    
  )
}

export default Github