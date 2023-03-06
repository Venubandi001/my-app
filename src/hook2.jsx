import axios from "axios";
import { useEffect, useState } from "react";
let Hoook2=()=>{
    let [a,seta]=useState(0);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((val)=>{
            console.log(val.data);
            seta(val.data)
        })
    })
    let aa=a.map((val,ind)=>{
        console.log(val);
    })

    return(
        <>
         <h1>Child</h1>
         
        </>
    )
}
export default Hoook2