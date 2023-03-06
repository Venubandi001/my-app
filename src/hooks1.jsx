import { useEffect, useRef, useState } from "react"

 

let Hoook1=()=>{
    let [a,seta]=useState(0);
    let value=useRef(0)
    console.log(value);
    useEffect(()=>{
        value.current=a
    },[a])
    return(
        <>
         <h1>Hello</h1>
         <button onClick={()=>{
            seta((a)=>{
                return a+1
            
            })
         }}>True</button>
         {a}
        </>
    )
}

export default Hoook1
