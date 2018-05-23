/*
Två sätt att göra samma sak:
handleClick = event => {
	this.props.dispatch(actionIncreaseByOne());
	this.props.dispatch({ type: 'INCREASE_BY_ONE' });
}
*/
import {ADD_TABLE} from '../actions/constants.js';

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

export { actionIncreaseByOne, actionDecreaseByOne, actionAddTable };

//
