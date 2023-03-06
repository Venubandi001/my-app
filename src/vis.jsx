import React from "react";
class Gooo extends React.Component{
    constructor(){
        // console.log("hh");
        super();
        this.state={
            todo:[],
            dummy:""
        }
    }
    gettval=(e)=>{
        console.log(e.target.value,"value");
        this.setState({
            dummy:e.target.value
        })
    };
    submitting=(e)=>{
        e.preventDefault();
        // console.log(e.target[1].value);
        this.setState({
            dummy:"",
            todo:[...this.state.todo,this.state.dummy]
        });
    };
    dele=(val)=>{
        console.log(val,"value");
        let ff=this.state.todo.filter((val1,ind)=>{
            console.log(val1,"val1");
            return val1 != val;
        });
        // console.log(ff);
        this.setState({todo:ff});
        // console.log(ff);
    }

    render(){
        console.log(this.state.todo);
        let a=this.state.todo.map((val,ind)=>{
            console.log(val);
            return(
                <ul>
                    <li key={ind}>{val}</li>
                    <button onClick={()=>this.dele(val)} key={ind+1}>delete</button>
                </ul>
            )
        })
        return(
            <div>
                <h1>TODO LIST</h1>
                <form onSubmit={this.submitting}>
                <input type="submit" value="submit" />
                   <input type="text" name="" id="goo" onChange={this.gettval}/>
                   
                   {a}
                </form>
            </div>
        )
    }

}
export default Gooo