import React from "react";



class Lefting1 extends React.Component{
    constructor(){
        super();
        this.state={
            a:20
        }
    }
    render(props){
       this.props.h(this.state.a
        )
        return(
            <h1>Hello</h1>
            
        )
    }
}
export default Lefting1