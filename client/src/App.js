import React, { Component } from 'react';
import Banner from './Banner.png';
import Course from './Course.js'
import './App.css';
import boo from './Design.jpeg';
import rpi from './assets/rpibtc.jpg';

import {
  Link,
  withRouter,
} from 'react-router-dom';

class App extends Component {


  render() {
return (
      <div className="App">
        <div>
          <h1> Bitcoin, simple and easy </h1>
          <h4>Bitcoin for developers, directly from your browser</h4>
        </div>
        <div>
          <a href='#Lessons' role= "button" className= "btn btn-danger"> Start learning</a>
        </div>
        <div className= " img">
          <img src= {Banner}/>
        </div>


        <div className="col-xs-12" id="Lessons">
            <div className="toCourse col-xs-12">
              <img style={{width: '60%'}} src={rpi} />
            </div>
            <div className="toCourse col-xs-12">
            <img style={{width: '60%'}} src={rpi} />
            </div>
            <div className="toCourse col-xs-12">
            <img style={{width: '60%'}} src={rpi} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
