import React, { Component } from 'react';
import Banner from './Banner.png';
import Navbar from './Navbar';
import './App.css';
import boo from './Design.jpeg';
import rpi from './assets/rpi.png';
import btc from './assets/btcCourse.png';
import py from './assets/py.png';

import {
  Link,
  withRouter,
} from 'react-router-dom';

class App extends Component {


  render() {
return (
      <div className="App">
        <Navbar />
        <div>
          <h1>Develop Bitcoin, quick and easy</h1>
          <h4>Build Bitcoin applications, directly from your browser.</h4>
        </div>
        <div>
          <a id="toLessons" href='#Lessons' role= "button" className= "btn btn-danger"> Start learning</a>
        </div>
        <div className= " img">
          <img src= {Banner}/>
        </div>


        <div className="col-xs-12" id="Lessons">
            <div className="toCourse col-xs-12">
              <a href="/rpi">
              <div className="col-xs-4">
              <div className="course col-xs-12">
              <img style={{width: '100%'}} src={rpi} />
                <span id="coursePrice">
                <b >FREE</b>
                </span>
              </div>
              
                
                <h4 id="cardTitle">Raspberry Pi Bitcoin Node</h4>
                <p>Sync with the Bitcoin network with your own Raspberry Pi.</p>
              </div></a>
              <a href='/py'>
              <div className="col-xs-4">
              <div className=" course col-xs-12">
              <img style={{width: '100%'}} src={py} />
              <span id="coursePrice">
                <b >FREE</b>
                </span>
              </div>
              
                <h4 id="cardTitle">Python Bitcoin Sandbox</h4>
                <p>Are you a Python developer who is looking to get your feet wet with Bitcoin? Now you can start building Bitcoin applications using the BuildGrounds Python Sandbox. You won’t have to worry about downloading anything, simply click below and get started hacking!</p>

              </div></a>
              <a href='/course'>
              <div className="col-xs-4">
              <div className="course col-xs-12" >
              <img style={{width: '100%'}} src={btc} />
              <span style={{ backgroundColor: '#f7930b'}} id="coursePrice">
                <b >0.005 BTC</b>
                </span>
              </div>
              
                <h4 id="cardTitle">Buidl Bootcamp</h4>
                <p>This code along bootcamp by Justin Moon will get you to understand Bitcoin at its core level. With 10 hours filled of coding and advanced cryptographic concepts.</p>
                
              </div></a>
              
            </div>
        </div>
      </div>
    );
  }
}

export default App;
