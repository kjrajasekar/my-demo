import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Name(props){
    let vals=props.namekey
    const result=useSelector(item=> item.counts)
    const [name, setnames]=useState('kkk')
    function d(){
        console.log("dd"+name)
    }
    return (
        <div>
            <h1 onClick={()=>{setnames("hhhhhhh"); d()}}>hi and welcoime{vals}</h1>
            <p>{result}</p>
      {/* {result.length>0 &&
        result.map((x)=>{return <p>{x.name}</p>})
      } */}
        </div>
    )
}


export default Name;