import { useState } from 'react';
import './App.css'

function Mystack(props){
  console.log(props)
    return (
        <div>
            <h1 className='king'> hi and welcome to stack</h1>
         <p> value is {props.name}</p>
        </div>
    )
}
export default Mystack;