import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import pyHead from './assets/pybitsHead.png';
import QRCode from 'qrcode.react';
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
    // let self = this;
    this.setState({
        email: event.target.email
    }, () => {
      console.log(this.state.email);
    }  ); 

} 


 
  handlePost() {
    const email = document.getElementById('emailSubmit').value;
    
    axios.post('http://localhost:8080/user', {
      "email": email,
      "address": this.state.address
    }).then((response) => {
      console.log("Response:", response.data);
    }).catch((error) => {
      console.log("Error:", error);
    })
  }


  
  


  render() {
    return (
      <div  className="App">
      <Navbar />
        {/* <div className="col-xs-3"></div> */}
        <div className="col-xs-12">
          <img style={{ boxShadow: 'none', borderRadius: '0px'}} src={pyHead} />
        </div>
        <div style={{ marginTop: '20px'}} className="col-xs-12">
        <div style={{ textAlign: 'left', marginLeft: '25%'}} className="col-xs-6">
        <p>Are you a Python developer who is looking to get your feet wet with Bitcoin? Now you can start building Bitcoin applications using the BuildGrounds Python Sandbox. You won’t have to worry about downloading anything, simply click below and get started hacking! This is a sandbox environment meant for you to test things out with Bitcoin and Python. You'll have access to:</p>
        </div>
        <div style={{ textAlign: 'left', marginLeft: '30%'}} className="col-xs-12">
        <ul>
          <li>A Python 2.7 Kernel</li>
          <li>A Python 3 Kernel</li>
          <li>This package <a href="https://github.com/primal100/pybitcointools">pybitcointools</a> started by Vitalik Buterin</li>
          <li>The ability to create your own file structure</li>
        </ul>
        
        </div>
        <div style={{ textAlign: 'left', marginLeft: '25%'}} className="col-xs-6">
        <p>Since this is a sandbox environment be sure to save your changes locally. Remember that other people will have access to this as well so try not to save one of your private keys on the notebook and collaborate with others. To enter the sandbox enter the password below when prompted.</p>
        </div>
        <div className="col-xs-12">
        <h4>Sandbox Password:</h4>
        <h4>bitcoinpython</h4>
        <br />
        <a href="https://py.buidlgrounds.com" role= "button" className= "btn btn-danger">Enter Sandbox</a>
        </div>
        
        </div>
    
          <div style={{ backgroundColor: '#fedb67', paddingTop: '25px', paddingBottom: '25px', marginTop: '50px'}} className="col-xs-12">
          <div style={{ backgroundColor: '#fedb67', textAlign: 'left'}} className="col-xs-6">
            
          </div>
          <div style={{ backgroundColor: '#fedb67', textAlign: 'center'}} className="col-xs-6">
          
          </div>
          </div>
          
        
      </div>
    );
  }
}
export default Py;