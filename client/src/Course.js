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
        <h1>course</h1>

        <input  id="email1"  onChange={this.handleEmail} />

        <button onClick={this.handlePost}>
            Get Response
        </button>

        <div>
          

        </div>

       
      </div>
    );
  }
}

export default Course;
