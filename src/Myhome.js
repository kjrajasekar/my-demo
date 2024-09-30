import { useState } from 'react';
import './App.css'
import Mystack from './Mystack';
import { useDispatch } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';

function Myhome(){
    const [count, mycount]=useState(0)
let t=10;
 const   con=()=>{
t=t+10
console.log("val"+t)
    }
const disp=useDispatch();
    const myaction=()=>{
        console.log("1");
        let actionObject={
            type:"in",
          data:{name:"raja"}
        }
        disp(actionObject)
    }
    return (
        <div>
            <h1 className='king'> hi and welcome</h1>
            <button onClick={()=>{
                mycount(count+1);
                con();
                console.log("working")
            }}>onclick</button>
            <button onClick={myaction}>redux +</button>

            <p> output is  {count}</p>

            <Mystack name={count}/>
        </div>
    )
}
export default Myhome;