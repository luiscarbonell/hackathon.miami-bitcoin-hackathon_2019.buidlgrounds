import React, { Component } from 'react';
import axios from 'axios';
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
  }
  componentDidMount() {
    this.getAddress();
  }

 /// get request


  getAddress() {
    axios.get('http://localhost:8080/address')
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }

  // post request 
  handlePost() {
    axios.post('/user', {
      "email": "john.doe@gmail.com",
      "address": "57a0bb45e41ffd9f095fd6eaecaf0139a33f1eba"
    }).then(function(response) {
      console.log("Response:", response.data)
    }).catch(function(error) {
      console.log("Error:", error)
    })
  }




  render() {
    return (
      <div className="App">
        <h1>course</h1>

        <div>
          

        </div>

       
      </div>
    );
  }
}

export default Course;
