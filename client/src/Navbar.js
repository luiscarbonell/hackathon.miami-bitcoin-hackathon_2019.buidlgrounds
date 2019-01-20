import React, { Component } from 'react';
import logo from './assets/buidllogo.png';

import './App.css';

class Navbar extends Component {
  

  render() {
    return (
      <div className="Nav">
        <div className="col-xs-12">
          <div className="col-xs-2">
          <a href="/">
          <img style={{ boxShadow: 'none', marginBottom: '25px'}} src={logo} />
          </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
