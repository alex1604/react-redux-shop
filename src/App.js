import React, { Component } from 'react';
import Counter from './components/Counter.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
	  	Hello Redux!
		<Counter />
      </div>
    );
  }
}

export default App;
