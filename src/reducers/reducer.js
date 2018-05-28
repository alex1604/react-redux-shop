import {combineReducers} from 'redux';
import {ADD_TABLE, UNDO_TABLE, ADD_TO_EMPTY_SHOPPING_LIST, ADD_TO_EXISTING_SHOPPING_LIST, NO_DATA, LOADING, LOADED, SELECT_TAB, REMOVE_TABLE} from '../actions/constants.js';
// import update from 'immutability-helper';

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
				past: [...state.past, action.furniture] ,
				present: [...state.present, action.furniture],
				future: []
			};
		case REMOVE_TABLE:
		let removeItem = state.present[action.item];
		console.log(removeItem);
		return {
				past: [...state.past, removeItem],
				present: state.present.filter(x => x !== removeItem),
				future: []
		};
		case UNDO_TABLE:
		let last = state.past[state.past.length - 1];
		console.log(last);
		console.log(state.past);
		return{
				past: state.past.filter( x => x !== last ),
				present: [...state.present, last],
				future: [state.present, ...state.future]
			};
		default:
			return state;
	}
};

let shoppingCart = (state={previous:[], lastAdded: []}, action) => {
	switch( action.type ) {
		case ADD_TO_EMPTY_SHOPPING_LIST:
			return {
				previous : [...state.previous, action.item],
				lastAdded: [action.item]
				};

		case ADD_TO_EXISTING_SHOPPING_LIST:
			let newState = [...state.previous];

			newState[action.item.index].antal = action.item.antal;

			return {
				previous : newState,
				lastAdded: [action.item.lastAdded]
			};
		default:
			return state;
	}
};

let historyReducer = (state=[], action) =>{
	return(
		[...state, action.type]
	);
}

let tabReducer = (state=[], action) =>{
	switch( action.type ) {
		case SELECT_TAB:
			return [action.tab];
		default:
			return state;
	}

}
let rootReducer = combineReducers({
produkter: tableReducer,
value: counterReducer,
history: historyReducer,
kundvagn: shoppingCart,
tab: tabReducer,
});

export default rootReducer;
