import React, { Component } from 'react';
import logo from './logo.svg';
import Course from './Course.js'
import './App.css';
import {
  Link,
} from 'react-router-dom';

class App extends Component {












  render() {
return (
      <div className="App">

       
       <div className='Banner'>

       HELLO

       <div>

          <Link to={Course}>
                
          </Link>

       </div>

      


       
   
       </div>




      </div>
    );
  }
}

export default App;
