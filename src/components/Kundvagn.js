import React, { Component } from 'react';
// import produktObj from './products.json';
import { connect } from 'react-redux';
import './Kundvagn.css'
import {actionDeleteFromBasket, actionDecreaseBy} from '../actions/actions.js'

class Kundvagn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete = e =>{
    let index = e.target.id;
    let deduct = (this.props.kundvagn[index].antal * this.props.kundvagn[index].pris);
    let newState = [...this.props.kundvagn];
    newState.splice(index, 1);

    let action = actionDeleteFromBasket(newState, deduct);
    this.props.dispatch(action);
    this.props.dispatch(actionDecreaseBy(this.props.kundvagn[index].antal));
  }
  render() {
    console.log(this.props.kundvagn);
    let list = this.props.kundvagn.map(
      (x, index) => (
        <div className="kundvagnItem" key={index}>
          <img src={require("../images/bord3.jpg")} alt="amazing table" />
          <div className='productInfo'>
            <h4>{x.namn} ( <span className="smaller">{x.pris} SEK / st. </span>)</h4>
            <h4>{x.antal} st. = {x.pris*x.antal} SEK <i className='fa fa-trash fa-2x' id={index} onClick={this.handleDelete}></i></h4>
          </div>
        </div>
      )
    );

    return (
      <div id='kundvagn'>
      <span className='fa fa-close fa-2x' onClick={this.props.close}></span>
        {list}
        <div id='totalPrice'>
        <u>Summa</u>: {this.props.shoppingbasket.total} inkl. MOMS
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    kundvagn: state.kundvagn.previous,
    shoppingbasket: state.kundvagn
  }
};
export default connect(mapStateToProps)(Kundvagn);
