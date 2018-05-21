import React, { Component } from 'react';
import Counter from './components/Counter.js';
import './App.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div>
	  	Buy Mysterious Tables:
      
		<Counter />
      </div>
    );
  }
}

export default App;
