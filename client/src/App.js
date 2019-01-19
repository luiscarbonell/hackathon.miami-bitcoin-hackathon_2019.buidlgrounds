import React, { Component } from 'react';
import logo from './logo.svg';
import Course from './course.js'
import './App.css';
import boo from './Design.jpeg';

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

       
       </div>
       <div className="jumbotron"> 
       <img src={boo}/>
       </div>
       




      </div>
    );
  }
}

export default App;
