import React, { useEffect, useState } from 'react'



const Effect = () => {
    const[data, setData] = useState("")
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response=>response.json())
        .then(data => { setData(data[45].email) })  
        .catch("error")
        console.log("api was called");
    },[])
  return (
    <div><h1>This is email from API</h1>{data}
    
    </div>
  )
}

export default Effect