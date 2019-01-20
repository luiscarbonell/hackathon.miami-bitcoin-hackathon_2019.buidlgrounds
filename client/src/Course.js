import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import bootcampHead from './assets/buidlBootHead.png';
import QRCode from 'qrcode.react';
import {
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Course extends Component {
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
          <img style={{ boxShadow: 'none', borderRadius: '0px'}} src={bootcampHead} />
        </div>
        <h4> By: Justin Moon</h4>       
        <div  className="col-xs-12">
        <div style={{ textAlign: 'left', marginLeft: '25%'}} className="col-xs-6">
        <p>Want to build a mini Bitcoin blockchain from scratch? Well then this course is for you! Learn bitcoin fundamentals, go from the basics to create your very own blockchain. To be able to take this course you must: </p>
        </div>
        <div style={{ textAlign: 'left', marginLeft: '30%'}} className="col-xs-12">
        <ul>
          <li>Have taken a Basic Python Course</li>
          <li>Can commit up to 20 hours a week</li>
        </ul>
        </div>
        
        </div>
        <h2>Digital Cash</h2>
        <div style={{ textAlign: 'left', marginLeft: '30%'}} className="col-xs-12">
          <h4>Lessons</h4>
          <ul>
            <li>Lesson 1: PNG Coin</li>
            <li>Lesson 2: ECDSA Coin</li>
            <li>Lesson 3: Bank Coin</li>
            <li>Lesson 4: Divisi Coin</li>
            <li>Lesson 5: Block Coin</li>
            <li>Lesson 6: Hash Coin</li>
            <li>Lesson 7: Bitcoin</li>
          </ul>
          
          

          </div>
          <div style={{ backgroundColor: '#fedb67', paddingTop: '25px', paddingBottom: '25px'}} className="col-xs-12">
          <div style={{ backgroundColor: '#fedb67', textAlign: 'left'}} className="col-xs-6">
            <h4>Take the following steps to get access to the course</h4>
            <ol>
              <li>Type your email under the QR Code</li>
              <li>Submit your email.</li>
              <li>Send 0.005BTC to the unique address show to the right.</li>
            </ol>
            <p>Be sure to submit your email before you pay for the course. After your payment is confirmed then you will be emailed the password and notebook for your course.</p>
          </div>
          <div style={{ backgroundColor: '#fedb67', textAlign: 'center'}} className="col-xs-6">
          <QRCode value={this.state.address} />
            <p>Send 0.005 BTC</p>
            <input style={{ width: '300px', height: '30px', borderRadius: '5px', border: '0px'}} id="emailSubmit" />
            <a className="btn" id="submitForm" onClick={this.handlePost} >Submit</a>
          </div>
          </div>
          
        
      </div>
    );
  }
}

export default Course;
