import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Route path='/' component={NavBar}></Route>
         <Route exact path='/' component={About}></Route>
         <Route exact path='/' component={Form}></Route>

      </div>
    );
  }
}

export default App;