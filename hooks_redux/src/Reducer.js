import React from 'react'
import { useReducer } from 'react'

const reducer=(state, action)=>{
    switch (action.type) {
        case "Increment":
           return {count: state.count+1, showText:state.showText}
        case "toggleText" :
            return{count: state.count, showText:!state.showText}
        default:
            return{state};
    }

}

const Reducer = () => {
    const[state, dispatch] = useReducer(reducer, {count:0, showText:true})
  return (
    <div>
     <h1>{state.count}</h1>
     <button onClick={()=>{dispatch({type:"Increment"});
    dispatch({type:"toggleText"})}}>Click</button>
     {state.showText && <h1>This is toggle text</h1>}
    </div>
  )
}

export default Reducer