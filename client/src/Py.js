import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import headImg from './assets/rpiNode.png';
import {
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Py extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      email: '',
    };
    this.getAddress = this.getAddress.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  componentDidMount() {
    this.getAddress();
  }

 /// get request


  getAddress() {
    axios.get('http://localhost:8080/address')
    .then((response) => {
      // handle success
      console.log("Address: " + response.data.address);
      this.setState({ address: response.data.address });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }

  // post request 

  handleEmail(event) {
    let self = this;
    self.setState({
        email: event.target.email
        
    }  ); 

} 


 
  handlePost() {
    axios.post('http://localhost:8080/user', {
      "email": this.state.email,
      "address": this.state.address
    }).then((response) => {
      console.log("Response:", response.data);
    }).catch((error) => {
      console.log("Error:", error);
    })
  }


  
  


  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Py</h1>

        <input  id="email1"  onChange={this.handleEmail} />

        <button onClick={this.handlePost}>
            Get Response
        </button>

        <div>
          <p></p>
          <h1>Welcome to the BuidlGrounds Python Sandbox</h1>
          <p>The BuidlGrounds Sandbox allows you to play around with Bitcoin without the risk of losing Bitcoin in the process.
If you are begging to develop on Python and have previously used the Jupyter Notebook this is a great way for you to start building Bitcoin applications.</p>
          <h1>What is a Sandbox</h1>
          <p>Sandboxing is an important security technique that isolates programs, preventing malicious or malfunctioning programs from damaging or snooping on the rest of your computer. The software you use is already sandboxing much of the code you run every day.</p>
        </div>

       
      </div>
    );
  }
}

export default Py;
