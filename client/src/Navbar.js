import React, { Component } from 'react';
import logo from './assets/buidllogo.png';

import './App.css';

class Navbar extends Component {
  

  render() {
    return (
      <div className="Nav">
        <div className="col-xs-12">
          <div className="col-xs-2" style={{fontSize: "large", color: "black"}}>
          <a id="navBrand" href="/">

          <img style={{ boxShadow: 'none', marginBottom: '25px' , width: '25%'}} src={logo} />
            BuidlGrounds
          </a>
          </div>
          <div style={{ textAlign: 'right' }} className="col-xs-10">
            <a id="createCourse" className="btn">Create a Course</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
