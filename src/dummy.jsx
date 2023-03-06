import React from "react";

class Dummy extends React.Component{
    constructor(){
        console.log("constructor");
        super()
        this.state={
            name:0,
            surname:"Bandi"
        }
    }
    shouldComponentUpdate(){
        if(this.state.name <=10) return true;
        else return false;
    }
    render(){
        return(
            <>
            <h1>Name............... {this.state.name}</h1>
            <button onClick={()=>{this.setState({name:this.state.name+1})}}>Plues</button>
            <button onClick={()=>{this.setState({name:this.state.name-1})}}>Minus</button>
            </>
        )
    }
    
    
}
export default Dummy