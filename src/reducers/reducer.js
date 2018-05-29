import { combineReducers } from 'redux';
import { ADD_TABLE, DELETE_FROM_BASKET, REMOVE_ONE_TABLE, UNDO_TABLE, ADD_TO_EMPTY_SHOPPING_LIST, ADD_TO_EXISTING_SHOPPING_LIST, LOADING, SELECT_TAB, REMOVE_TABLE, CHANGE_TABLE} from '../actions/constants.js';
// import update from 'immutability-helper';

let counterReducer = (state = {}, action) => {
	switch (action.type) {
		case 'INCREASE_BY_ONE':
			return state + LOADING;

		case 'DECREASE_BY':
			return state - action.antal;

		default:
			return state;
	}
}

let tableReducer = (state = { past: [], present: [], future: [] }, action) => {
	switch (action.type) {
		case ADD_TABLE:
		// const nyPast = state.past.slice(0, state.past.length - 1);
		// console.log("new past is",nyPast);
			return {
				past: [...state.past, state.present],
				present: [...state.present, action.furniture],
				future: []
			};
		case CHANGE_TABLE:

		let changedState = state.present.filter(x =>
			x.namn !== action.oldItem.namn );

			return {
				past: [...state.past, state.present],
				present: [...changedState, action.newItem],
				future: [],
			};

		case REMOVE_ONE_TABLE: // removes product from shopping basket
			return {
				past: [...state.past, state.present],
				present: action.furniture,
				future: []
			};
		case REMOVE_TABLE: // removes table from admin catalogue
			let removeItem = state.present[action.item];
			console.log(removeItem);
			let presentState = state.present.filter(x => x !== removeItem);
			console.log(presentState);
			return {
				past: [...state.past, state.present],
				present: presentState,
				future: []
			};
		case UNDO_TABLE:
			let last = state.past[state.past.length - 1];
			console.log(state.past.length);
			return {
				past: state.past.filter(x => x !== last),
				present:  last,
				future: [state.present, ...state.future]
			};
		case DELETE_FROM_BASKET:
			return state;
		default:
			return state;
	}
};

let shoppingCart = (state = { previous: [], lastAdded: [] }, action) => {
	switch (action.type) {
		case ADD_TO_EMPTY_SHOPPING_LIST:
			return {
				previous: [...state.previous, action.item.object],
				lastAdded: [action.item.object],
				total: action.item.total
			};

		case ADD_TO_EXISTING_SHOPPING_LIST:
			let newState = [...state.previous];
			newState[action.item.index].antal = action.item.antal;
			return {
				previous: newState,
				lastAdded: [action.item.lastAdded],
				total: action.item.total
			};

		case DELETE_FROM_BASKET:
			return{
				previous: action.item,
				lastAdded: [...state.lastAdded],
				total: state.total - action.deduct
			}
		;
		default:
			return state;
	}
};

let historyReducer = (state = [], action) => {
	return (
		[...state, action.type]
	);
}

let tabReducer = (state = [], action) => {
	switch (action.type) {
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
