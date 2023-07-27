import React, { useEffect, useLayoutEffect } from 'react'


const LayoutEffect = () => {
    useEffect(()=>{
        console.log("hellooo");
        },[]) //the website is render layouteffect first.
    useLayoutEffect(()=>{
     console.log("kelooo");
    },[])
    
  return (
    <div>LayoutEffect</div>
  )
}

export default LayoutEffect