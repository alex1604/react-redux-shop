/*
Två sätt att göra samma sak:
handleClick = event => {
	this.props.dispatch(actionIncreaseByOne());
	this.props.dispatch({ type: 'INCREASE_BY_ONE' });
}
*/
import {ADD_TABLE, SELECT_TAB} from '../actions/constants.js';

let actionAddTable = (o) => {
	return {
		type: ADD_TABLE,
		furniture: o,
	};
}

let actionIncreaseByOne = () => {
	return {
		type: 'INCREASE_BY_ONE'
	}
}
let actionDecreaseByOne = () => {
	return {
		type: 'DECREASE_BY_ONE',
	}
}

let actionAddToEmptyShoppingList = (o) => {
	return {
		type: 'ADD_TO_EMPTY_SHOPPING_LIST',
		item: o,
	};
}

let actionAddToExistingShoppingList = (o) => {
	return {
		type: 'ADD_TO_EXISTING_SHOPPING_LIST',
		item: o,
	};
}

let actionSelectTab = (tab) => {
	return{
		type: SELECT_TAB,
		tab,

	};
}
export {
	actionAddToEmptyShoppingList,
	actionAddToExistingShoppingList,
	actionIncreaseByOne,
	actionDecreaseByOne,
	actionAddTable,
 	actionSelectTab};

//
