import {combineReducers} from 'redux';
import {ADD_TABLE} from '../actions/constants.js'

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

let rootReducer = combineReducers({
	produkter: tableReducer,
});
export default rootReducer;
