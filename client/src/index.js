import React from 'react';
import ReactDOM from 'react-dom';
import Course from './Course.js'
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
<Router>
    <div>
        <Route exact path='/'component={App}/> 
        <Route exact path='/course' component={Course} />    
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA 

