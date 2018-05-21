import {combineReducers} from 'redux';
import {NO_DATA, LOADING, LOADED} from '../actions/constants.js';

let counterReducer = (state=14, action) => {
	switch( action.type ) {
		case 'INCREASE_BY_ONE':
			return state + LOADING;

		case 'UPDATE':
			return state + action.amount;

		default:
			return state;
	}
}

let rootReducer = combineReducers({
	value: counterReducer
});

export default rootReducer;
