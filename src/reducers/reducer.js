import {combineReducers} from 'redux';
import {ADD_TABLE, ADD_TO_EMPTY_SHOPPING_LIST, ADD_TO_EXISTING_SHOPPING_LIST, NO_DATA, LOADING, LOADED} from '../actions/constants.js';

let counterReducer = (state={}, action) => {
	switch( action.type ) {
		case 'INCREASE_BY_ONE':
			return state + LOADING;

		case 'DECREASE_BY_ONE':
			return state - LOADING;

		default:
			return state;
	}
}

let tableReducer = (state={past:[], present:[], future:[]}, action) => {
	switch( action.type ) {
		case ADD_TABLE:
		return {
				past: [...state.past,state.present],
				present: [...state.present, action.furniture],
				future: []
			};
		default:
			return state;
	}
};

let shoppingCart = (state={previous:[], lastAdded: []}, action) => {
	switch( action.type ) {
		case ADD_TO_EMPTY_SHOPPING_LIST:
			return {
				previous: [...state.previous, state.lastAdded],
				lastAdded: [action.item]
				};

		case ADD_TO_EXISTING_SHOPPING_LIST:
			return {
				previous: [...state.previous, state.lastAdded],
				lastAdded: [action.item]
				};

		default:
			return state;
	}
};

let rootReducer = combineReducers({
	produkter: tableReducer,
	value: counterReducer,
	kundvagn: shoppingCart
});
export default rootReducer;
