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
          <h1>Develop Bitcoin, Quick and Easy</h1>
          <h4>Build Bitcoin applications, directly from your browser.</h4>
        </div>
        <div>
          <a href='#Lessons' role= "button" className= "btn btn-danger"> Start learning</a>
        </div>
        <div className= " img">
          <img src= {Banner}/>
          <p></p>
          <p></p>
          <h2>Welcome to BuidlGrounds</h2>
        </div>


        <div className="col-xs-12" id="Lessons">
            <div className="toCourse col-xs-12">
              <a href="/rpi">
              <div className="col-xs-4"><img style={{width: '100%'}} src={rpi} />
                <h4>DIY Raspberry Pi Bitcoin node</h4>
                <h5></h5>
                <p>A tutorial for installing Bitcoin Core nodes on a Raspberry Pi
Participate in the Bitcoin, Litecoin, or Ethereum network
Full nodes, SPV wallets, cold storage, offline transaction signing</p>
              </div></a>
              <a href='/py'>
              <div className="col-xs-4"><img style={{width: '100%'}} src={py} />
                <h4>Python Bitcoin Sandbox</h4>
                <h5></h5>
                <p>Start building Bitcoin applications using the BuildGrounds Python Sandbox.</p>
                <p>Are you a Python developer who is looking to get your feet wet with Bitcoin? Now you can, Get started!</p>
              </div></a>
              <a href='/course'>
              <div className="col-xs-4"><img style={{width: '100%'}} src={btc} />
                <h4>Buidl Bootcamp</h4>
                <h5>by Justin Moon</h5>
                <p>Learn how Bitcoin works by building it.</p>
                <h5>Write Script execution engine</h5>
                <p>A script is essentially a list of instructions recorded with each transaction that describe how the next person wanting to spend the Bitcoins being transferred can gain access to them.</p>
              </div></a>
              
            </div>
        </div>
      </div>
    );
  }
}

export default App;
