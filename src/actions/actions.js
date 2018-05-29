/*
Två sätt att göra samma sak:
handleClick = event => {
	this.props.dispatch(actionIncreaseByOne());
	this.props.dispatch({ type: 'INCREASE_BY_ONE' });
}
*/
import {ADD_TABLE, CHANGE_TABLE,DELETE_FROM_BASKET, REMOVE_ONE_TABLE, SELECT_TAB, REMOVE_TABLE, UNDO_TABLE	} from '../actions/constants.js';

let actionAddTable = (o) => {
	return {
		type: ADD_TABLE,
		furniture: o,
	};
}
let actionChangeTable = (index,oldItem, newItem) => {
	return{
		type: CHANGE_TABLE,
		newItem: newItem,
		oldItem: oldItem,
		index: index,
	};
}
let actionDeleteFromBasket = (o, deduct) => {
	return {
		type: DELETE_FROM_BASKET,
		item: o,
		deduct: deduct
	}
}
let actionRemoveOneTable = (o) => {
	return {
		type: REMOVE_ONE_TABLE,
		furniture: o
	}
}
let actionRemoveTable = (item) => {
	return{
		type: REMOVE_TABLE,
		item
	}
}
let actionUndoTable = () => {
	return{
		type: UNDO_TABLE,
	};
}

let actionIncreaseByOne = () => {
	return {
		type: 'INCREASE_BY_ONE'
	}
}
let actionDecreaseBy = (o) => {
	return {
		type: 'DECREASE_BY',
		antal: o
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
	actionDecreaseBy,
	actionAddTable,actionRemoveTable,actionUndoTable,
 	actionSelectTab, actionRemoveOneTable, actionDeleteFromBasket,
	actionChangeTable};

//
