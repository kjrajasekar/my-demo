import './App.css'
import React, { useContext, useState } from 'react';
import UserContext from './MyContext';

function Home(){
    const [val, setval]=useState('')
    const { userName, setUserName } = useContext(UserContext);
    const changeHandler = event => setUserName(val);
    return (
      
      <div>
      <input
        type="text"
 onChange={(event)=>{setval(event.target.value)}}
      />
      <button type='submit'    onClick={changeHandler}>submit</button>
  </div>
    );
}
export default Home;