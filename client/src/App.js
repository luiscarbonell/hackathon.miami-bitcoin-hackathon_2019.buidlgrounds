import React, { Component } from 'react';
import logo from './logo.svg';
import Course from './Course.js'
import './App.css';

import {
  Link,
  withRouter,
} from 'react-router-dom';

class App extends Component {












  render() {
return (
      <div className="App">

      WHATS APP

       
       <div className='Banner'>

       HELLO

       <div>

         TO INFINITY AND BEYOND

          <Link className="btn" to={Course}>
              whats app 
    
          </Link>

       </div>

      


       
   
       </div>




      </div>
    );
  }
}

export default App;
