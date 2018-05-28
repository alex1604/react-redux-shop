/*
Två sätt att göra samma sak:
handleClick = event => {
	this.props.dispatch(actionIncreaseByOne());
	this.props.dispatch({ type: 'INCREASE_BY_ONE' });
}
*/
import {ADD_TABLE, REMOVE_ONE_TABLE, ADD_TO_EMPTY_SHOPPING_LIST, ADD_TO_EXISTING_SHOPPING_LIST} from '../actions/constants.js';

let actionAddTable = (o) => {
	return {
		type: ADD_TABLE,
		furniture: o,
	};
}
let actionRemoveOneTable = (o) => {
	return {
		type: REMOVE_ONE_TABLE,
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

export { actionAddToEmptyShoppingList, actionAddToExistingShoppingList, actionIncreaseByOne, actionDecreaseByOne, actionAddTable, actionRemoveOneTable };

//
