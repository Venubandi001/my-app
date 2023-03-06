import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class TodoList extends React.Component{
    constructor(){
        super();
        this.state={
            todo:[],
            name:""
        }
        // this.getvalue=this.getvalue.bind(this)
    }
   
    delete1=(val)=>{
        console.log("deleting");
       let del=this.state.todo.filter((val1,ind)=>{
            return val!==val1
        })
        // console.log(del);
        this.setState({
            todo:del
        })
        console.log(del);
    }
    edit=(val,ind)=>{
        let n1=prompt(`${val}`)
        let b=this.state.todo.splice(ind,1,n1)
        console.log(b);
        this.setState({todo:[...this.state.todo]})
        // console.log(b);
    }
    
    render(){
        
        let a=this.state.todo.map((val,ind)=>{
            return (
                
                <ul>
                <li key={ind}>{val}</li>
                <Button onClick={()=>this.delete1(val)} key={ind+1}>delet</Button>
                <Button onClick={()=>this.edit(val,ind)} style={{marginLeft:10}}>Edit</Button>
                </ul>
                
            )
            
        })
        // console.log(this.state.todo);
        return(
            <>
            <h1>TOdo list </h1>
            <Form action="" onSubmit={(e)=>{
        e.preventDefault()
       this.setState({
        name:"",
        todo:[...this.state.todo,this.state.name]
       })
    }}>
            <input type="text" name="" id="m1" onChange={(e)=>{
                this.setState({
                    name:e.target.value
                })
            }}/>
            <input type="submit" value="submit"/>
            <input type="reset" value="Reset" />
            {a}
            </Form>
           
            </>
        )
    }
}

export default TodoList