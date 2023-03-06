import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

class Nav extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Venu</Link>
            <Link to="/to">BU</Link>
          </Nav>
        </Container>
      </Navbar>
            </>
        )
    }
}
export default Nav