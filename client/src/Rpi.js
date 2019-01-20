import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import headImg from './assets/rpiNode.png';
import {
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Rpi extends Component {
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
        <img src={headImg} />
        <div className="col-xs-3" />
        <div style={{ marginBottom: '25px', }} className="col-xs-6">
        
        <h3>DOWNLOADING BITCOIN CORE DEPENDENCIES</h3>
        <p>In order to install Bitcoin Core we need to install a few tools and software packages. First let's make sure everything is up to date and update it if it isn't:</p>
        <code>
        pi@raspnode~$ sudo apt-get update <br />
pi@raspnode~$ sudo apt-get upgrade -y
        </code>
        <p>This one liner will download and install the packages we will need for Bitcoin Core 0.13.0:
</p>
        <code>
        pi@raspnode~$ sudo apt-get install autoconf libevent-dev libtool libssl-dev libboost-all-dev libminiupnpc-dev -y

        </code>
        <p>If you installed Raspbian Jessie Lite you'll also need to install git:</p>
        <code>pi@raspnode~$ sudo apt-get install git -y
</code>
        <p>That should take just a couple minutes. If you plan on using bitcoin-qt (the GUI and wallet) then you'll have to install additional dependencies:</p>
        <code>pi@raspnode~$ sudo apt-get install qt4-dev-tools <br /> libprotobuf-dev protobuf-compiler libqrencode-dev -y</code>
        <p>Make a directory to download required files:</p>
        <code>pi@raspnode~$ mkdir ~/bin
        <br />
        pi@raspnode~$ cd ~/bin</code>
        <p>Bitcoin Core 0.11.2 uses version 4.8 of the Berkeley database so we'll need to download, build, and install that. If you wish to run your Bitcoin node without a wallet, you can skip to <a href="http://raspnode.com/diyBitcoin.html#reallyinstallingbitcoin">Installing Bitcoin</a>.
        Download the Berkeley database source code, unzip it, then build the BerkeleyDB.
        </p>
        <code>
        pi@raspnode~/bin$ wget http://download.oracle.com/berkeley-db/db-4.8.30.NC.tar.gz <br />
pi@raspnode~/bin$ tar -xzvf db-4.8.30.NC.tar.gz <br />
pi@raspnode~/bin$ cd db-4.8.30.NC/build_unix/ <br />
pi@raspnode~/bin/db-4.8.30.NC/build_unix$ ../dist/configure --enable-cxx <br />
pi@raspnode~/bin/db-4.8.30.NC/build_unix$ make -j4 
        </code>
        <p>The "make -j4" command should take around 5 minutes to complete. If you get errors, then remove the "-j4" and just execute "make". This will take around 20 minutes.</p>
        <code> pi@raspnode~/bin/db-4.8.30.NC/build_unix$ sudo make install</code>
        </div>
        <div className="col-xs-3" />
      </div>
    );
  }
}

export default Rpi;
