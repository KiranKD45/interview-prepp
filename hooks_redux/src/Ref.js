import React, { useEffect, useLayoutEffect, useRef } from 'react'

const Ref = () => {
  const inputRef = useRef(null)
  
  useLayoutEffect(()=>{
    console.log(inputRef.current.value);
  })

  useEffect(()=>{
    inputRef.current.value= "KIRAN"
  })
     
     return (
    <div>
        <input value="kiran"  ref={inputRef}/>
        
    </div>
  )
}

export default Ref