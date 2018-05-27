import React, { Component } from 'react';
import Cart from './components/Cart.js';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './logo.svg';
import ProductsList from './components/ProductsList.js';
import Form from './components/Form.js';
import Kundvagn from './components/Kundvagn.js'
import Historik from './components/Historik.js';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    // console.log(this.props.history);
    return (
      <div>
        <header>
          <div id='logo'><img id='logo' src={logo} alt='shitty_logo'/> The Table Shop</div>
		      <Cart />
        </header>
        <ProductsList />
        <Form/>
        <Historik historyList={this.props.history}/>
      </div>
    );
  }
}

let mapStateToProps = state =>{
  return{
    history: state.history,
  };
}
export default connect(mapStateToProps)(App);
