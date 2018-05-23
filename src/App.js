import React, { Component } from 'react';
import Cart from './components/Cart.js';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './logo.svg';
import ProductsList from './components/ProductsList.js';
import Form from './components/Form.js';

class App extends Component {
  render() {
    return (
      <div>
        <header>
            <div id='logo'><img id='logo' src={logo} alt='shitty_logo'/> The Table Shop</div>
		        <Cart />
        </header>
        <ProductsList />
        <Form/>
      </div>
    );
  }
}

export default App;
