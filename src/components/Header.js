import React,{Component} from 'react';
import Cart from './Cart.js';
import logo from '../logo.svg';
import {actionSelectTab} from '../actions/actions.js';
import {connect} from 'react-redux';

class Header extends Component {
  showTab = (param) =>{

    let action = actionSelectTab(param);
    this.props.dispatch(action);
  };
  render(){
    return(
      <header className="App-header">
        <div id="logo">
          <img className="App-logo"src={logo} alt='shitty_logo'/>
          <p className="App-title">The Table Shop</p>
        </div>
        <nav className="navbar">
          <li><a onClick={()=>this.showTab('products')}>Produkter</a></li>
          <li><a onClick={()=>this.showTab('admin')}>Admin</a></li>
          <li><a onClick={()=>this.showTab('hist')}>Historik</a></li>
          <li><Cart/></li>
        </nav>
      </header>
    );
  }
}
let mapStateToProps = state =>{
  return{
    tab: state.tab
  };
}
export default connect(mapStateToProps)(Header);
