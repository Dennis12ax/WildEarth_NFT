import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar,Container, Nav, Card, Button } from 'react-bootstrap';
import Animal from './pages/Animal';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Buy from './pages/Buy';
import Mint from './pages/Mint';

import Caver from 'caver-js';

// const ACCESS_KEY_ID = '';
// const SECRET_ACCESS_KEY = '';
// const CHAIN_ID = '1001'; //테스트넷

// const option = {
//   headers: [
//     {
//       name: "Authorization",
//       value: "Basic " + Buffer.from(ACCESS_KEY_ID +":"+ SECRET_ACCESS_KEY).toString("base64")
//     },
//     {name: "x-chain-id", value:CHAIN_ID}
//   ]
// }

// const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn",option));

function App() {
  let nav_st = {background:"#FFFFFF", fontWeight: 'bold'}
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar className="navBar" variant="light" fixed='top' style={nav_st}>
          <Container>
          <Navbar.Brand href="/" className="navLogo">
            <img src = "\img\logo_cap.png" alt={logo} width = '160' height= '72' marginRight = '20px' textAlign = 'center'/>
          </Navbar.Brand>
          <Nav className = "me-auto">
            <Nav.Link href="Animal">Animal</Nav.Link>
            <Nav.Link href="Explore">Explore</Nav.Link>
            <Nav.Link href="Profile">Profile</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Button variant="secondary" onClick={
              async ()=>{
                if(typeof window.klaytn !== 'undefined') {
                  const accounts = await window.klaytn.enable()
                  const account = accounts[0] // We currently only ever provide a single account,but the array gives us some room to grow.
                }
            }}>카이카스 지갑연결</Button>
          </Nav>
          </Container>
        </Navbar>
        <br></br>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='Animal' element={<Animal/>}/>
            <Route path='Explore' element={<Explore/>}/>
            <Route path='Profile' element={<Profile/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Buy' element={<Buy/>}/>
            <Route path='Mint' element={<Mint/>}/>
          </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
