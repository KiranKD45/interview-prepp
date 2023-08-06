import React, { useContext } from 'react'
import { data, data1 } from './App'

const ChildC = () => {
const Name = useContext(data);// which is from usecontext Hook
const Age = useContext(data1)
  return (
    <>
    <data.Consumer>
        {
            ()=>{ //(Name)=>{return(<h1>Name:{Name}</h1>)} which is from normal context API
                return (
                    <h1>Name: {Name} <br/>
                    Age: {Age}</h1>
                )
            }
        }
    </data.Consumer>
    </>
  )
}

export default ChildC