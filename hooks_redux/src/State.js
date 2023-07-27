import React from 'react'
import { useState } from 'react'

const State = () => {
    const[count, setCount] = useState(0)
    const[showText, setShowText] = useState(true)
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1); setShowText(!showText)}}>Increment</button>
    {showText && <h1>this is text</h1>}
    </div>
  )
}

export default State