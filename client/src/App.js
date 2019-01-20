import React, { Component } from 'react';
import Banner from './Banner.png';
import Course from './Course.js'
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

        <div>
     
        </div>
        <div>
          <h1> Bitcoin, simple and easy </h1>
          <h4>Bitcoin for developers, directly from your browser</h4>

        </div>
        <div>
           
              <a href='/Course' role= "button" className= "btn btn-danger"> Start learning</a>


        </div>

        <div className= " img">
          <img src= {Banner}/>
        </div>


        <div>
          

        </div>

        <div>

     
            <a href='/Course' role= "button"  className= "btn btn-outline-primary"> Start learning</a>

       

          


        </div>



    

       
       <div className='Banner'>


       
       </div>
      




      </div>
    );
  }
}

export default App;
