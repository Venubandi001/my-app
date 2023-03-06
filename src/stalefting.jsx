import React from "react";
import Lefting1 from "./stalefing1";


class Lefting0 extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
     Boy=(data)=>{
        console.log(data);
    }
    render(){
        return(
            <>
            <h1>Hello</h1>
            <Lefting1 h={this.Boy}/>
            </>
        )
    }
}
export default Lefting0