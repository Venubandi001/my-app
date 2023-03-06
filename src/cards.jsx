
import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  './pagecss.css'

class Card1 extends React.Component{
    constructor(){
        super();
        this.state={
            item:[]
        }
    }
    componentDidMount(){
       axios.get("https://fakestoreapi.com/products").then(val=>{console.log(val)
        this.setState({
            item:val.data
        })
    })
    }
    render(){
        console.log(this.state.item);
        let aa=this.state.item.map((val,ind)=>{
            return(
                <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={val.image} />
                <Card.Body>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>
                    {val.description}
                  </Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
              </div>
            )
        })
        return(
            <div className="Card">
                {aa}
            </div>
            

        )
    }
}
export default Card1