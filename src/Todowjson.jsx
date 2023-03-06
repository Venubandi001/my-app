import React from "react";
import axios from "axios";
import "./pagecss.css"
import { Table } from "react-bootstrap";

class ToDo extends React.Component{
    constructor(){
        super()
        this.state={
            td:[],
            send:{
                
            }
        }
    }
    Reuse1=()=>{
        axios.get("http://localhost:3000/posts").then((val)=>{
            console.log(val.data);
            this.setState({
                td:val.data
            })
        }).catch((err)=>{console.log(err)})
    }
    componentDidMount(){
        this.Reuse1() 
    }
    Preval=(e)=>{
        this.state.send["name"]=e.target.value
        this.setState({
            send:this.state.send
        })
    }
    Submiting=(e)=>{
        e.preventDefault()
        console.log("valuesub");
        axios.post("http://localhost:3000/posts",this.state.send).then(val=>console.log(val))
        console.log(this.state.send);
        console.log(this.Reuse1());
        this.Reuse1()
    }
    del=(ind)=>{
        console.log(ind);
        axios.delete(`http://localhost:3000/posts/${ind}`).then(val=>console.log(val))
        this.Reuse1()
    }
    edit=(val)=>{
        
        let nn=prompt(`Edit the name ${val.name}`)
        axios.patch(`http://localhost:3000/posts/${val.id}`,{name:nn}).then(val=>console.log(val))
        this.Reuse1()
    }
    
    render(){
        // console.log(this.state.send);
        let a=this.state.td.map((val,ind)=>{
            return (
                <tr>
                    <td key={ind}>{val.name}</td>
                    <td><button onClick={()=>{this.del(val.id)}} className="v1">Delete</button></td>
                    <td><button onClick={()=>{this.edit(val)}} className="v1">Edit</button></td>
                </tr>
             
            )
        })
        return(
            <>
            <form action="" onSubmit={this.Submiting}>
                <input type="text" name="" id=""  onChange={this.Preval}/>
                <input type="submit" value="submit" />
                <input type="reset" value="Reset" />
            </form>
            <Table >
                <thead className="v1">
                    <tr>
                        <th>Name</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody> {a}</tbody>
             </Table>
            {/* {a} */}
            </>
        )
    }
}
export default ToDo