import React, {Component} from 'react';
import {actionIncreaseByOne, actionUpdate} from '../actions/actions.js';
//import Actions from '../actions/actions.js';
//Actions.actionUpdate
import {connect} from 'react-redux';
import './Cart.css'

class Cart extends Component {
	render() {
		return (
			<div>
				<div className="cart"><i className="fa fa-shopping-cart fa-4x"></i><span className="pan">{this.props.value}</span></div>  <br/><br/>
				<button onClick={this.handleClickIncrease}>Increase</button>
				<button onClick={event => this.props.dispatch(actionUpdate(-1))}>Decrease</button>
			</div>
		)
	}
	handleClickIncrease = event => {
		// this.setState eller this.props.x()
		let action = actionIncreaseByOne();
		console.log('Increase clicked, dispatching action:', action);
		this.props.dispatch(action);
	}
}
let mapStateToProps = state => {
	return {
		value: state.value
	};
}

export default connect(mapStateToProps)(Cart);


//
