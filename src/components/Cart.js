import React, {Component} from 'react';
import {actionIncreaseByOne, actionDecreaseByOne, actionUpdate} from '../actions/actions.js';
//import Actions from '../actions/actions.js';
//Actions.actionUpdate
import {connect} from 'react-redux';
import './Cart.css'
import Kundvagn from './Kundvagn.js'

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = { 
		  visaKundvagn: false
		}
		this.visaKundvagn = this.visaKundvagn.bind(this);
	}
	visaKundvagn(){
		this.setState({visaKundvagn: !this.state.visaKundvagn});
	}
	render() {
		const visaKundvagn = this.state.visaKundvagn ? (
			<Kundvagn close={this.visaKundvagn}/>
		) : (
			null
		);
		return (
			<div>
				<div className="cart" onClick={this.visaKundvagn}><i className="fa fa-shopping-cart fa-4x"></i><span className="pan">{this.props.value}</span></div>  <br/><br/>
				{visaKundvagn}
			</div>
		)
	}
	handleClickIncrease = event => {
		// this.setState eller this.props.x()
		let action = actionIncreaseByOne();
		console.log('Increase clicked, dispatching action:', action);
		this.props.dispatch(action);
	}
	handleDecrease = event => {
		let action = actionDecreaseByOne();
		console.log('Decrease clicked, dispatching action:', action);
		this.props.dispatch(action);
	}
}
let mapStateToProps = state => {
	return {
		value: state.value,
		kundvagn: state.kundvagn.previous
	};
}

export default connect(mapStateToProps)(Cart);


//
