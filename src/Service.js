import './App.css'
import React, { useContext } from 'react';

import UserContext from "./MyContext"
function Service(){
    const { userName } = useContext(UserContext);
    return( <div>
        <span>{userName}</span>
        <p>sample for service page</p>
        </div>
        )
}
export default Service;