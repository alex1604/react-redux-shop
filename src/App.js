import React, { Component } from 'react';
// import Cart from './components/Cart.js';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
// import ProductsList from './components/ProductsList.js';
// import Form from './components/Form.js';
// import Kundvagn from './components/Kundvagn.js'
// import Historik from './components/Historik.js';
// import {connect} from 'react-redux';
import Header from './components/Header.js';
import TabContent from './components/Tab.js';

class App extends Component {
  render() {
    // console.log(this.props.history);
    return (
      <div>
        <Header/>
        <TabContent/>
      </div>
    );
  }
}

// let mapStateToProps = state =>{
//   return{
//     history: state.history,
//   };
// }
// export default connect(mapStateToProps)(App);
export default App;
