// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import NavBar from "./Navbar.jsx"
// import ToDo from './Todowjson';
// import Card1 from './cards';
import Hoook1 from './hooks1.jsx';
import Hoook2 from './hook2.jsx';
import { BrowserRouter,Route,Link,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <NavBar/> */}
      <Link to="/">Hoook1</Link>
      <Link to="/Cards">Hoook2</Link>
      <Routes>
        <Route path='/' element={<Hoook1/>}/>
        <Route path='/Cards' element={<Hoook2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
