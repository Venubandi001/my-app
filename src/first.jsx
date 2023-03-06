import React from "react"
import Table from 'react-bootstrap/Table';
import "./pagecss.css"
class Hell extends React.Component {
    constructor() {
        super();
        this.state = {
            FakeApi: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then((val) => val.json()).then((val) => {
            this.setState({
                FakeApi: val
            })
        })
    }
    del=(val)=>{
        let del1=this.state.FakeApi.filter((val1,ind)=>{
            return val != val1
        })
        this.setState({
            FakeApi:del1
        })
    }
    render() {
        let a = this.state.FakeApi.map((val, ind) => {
                return <tr key={ind}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <button onClick={()=>this.del(val)}>Button</button>
            </tr>
        })
        return (
            <>
                <Table striped bordered hover>
                    <thead className="v1">
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Mail</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {a}
                    </tbody>
                </Table>
            </>
        )
    }
}
export default Hell