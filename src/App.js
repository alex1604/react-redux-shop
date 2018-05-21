import React, { Component } from 'react';
import Cart from './components/Cart.js';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div>
	  	Buy Mysterious Tables:
      
		<Cart />
      </div>
    );
  }
}

export default App;
