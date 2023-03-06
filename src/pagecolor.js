import React from "react"
import "./pagecss.css";
import Hell from "./first";
import Dummy from "./dummy";
import Dummy2 from "./todolist";

class Color1 extends React.Component{
    constructor(){
        super()
        this.state={
            value:0,
            c1:0
        }
    }

    render(){
        let c1=()=>{
            if(this.state.value<=10) return {backgroundColor:"red"}
            else if(this.state.value<=20) return {backgroundColor:"green"}
            else if(this.state.value<=30) return {backgroundColor:"yellow"}
            else return {backgroundColor:"lightblue"}
        }
        return(
        <div style={c1()}>
            <Hell/>
            <Dummy />
            <h1>Hai hello{this.state.value} </h1>
            <button onClick={()=>{this.setState({value:this.state.value+1})}}>Click</button>
            <Dummy2 />
        </div>
        )
    }
}

export default Color1