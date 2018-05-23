import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/reducer.js'
// import produktObj from './products.json';

const initialState ={
	value: 0,
    produkter:{
      past:[],
      present: [
        { namn : "Bord Plus",
          pris: 2000,
          antal: 4,},
        {
          namn : "Bord Två",
          pris: 3000,
          antal: 5},
        {
          namn : "Bord Family",
          pris: 5000,
          antal:2},
        {
          namn : "Bord Work",
          pris: 6000,
          antal: 2},
      ],
      future: [],
    }
};


const store = createStore(rootReducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));
registerServiceWorker();