import React, { Component } from "react";
import { actionIncreaseByOne } from "../actions/actions.js";
import { connect } from "react-redux";
import "./Cart.css";
import Kundvagn from "./Kundvagn.js";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visaKundvagn: false,
    };
    this.visaKundvagn = this.visaKundvagn.bind(this);
  }
  visaKundvagn() {
    this.setState({ visaKundvagn: !this.state.visaKundvagn });
  }
  render() {
    const visaKundvagn = this.state.visaKundvagn ? (
      <Kundvagn close={this.visaKundvagn} />
    ) : null;
    return (
      <React.Fragment>
        <div className="cart" onClick={this.visaKundvagn}>
          <i className="fa fa-shopping-cart fa-3x"></i>
          <span className="pan">{this.props.value}</span>
        </div>
        {visaKundvagn}
      </React.Fragment>
    );
  }
  handleClickIncrease = (event) => {
    let action = actionIncreaseByOne();
    this.props.dispatch(action);
  };
}
let mapStateToProps = (state) => {
  return {
    value: state.value,
    kundvagn: state.kundvagn.previous,
  };
};

export default connect(mapStateToProps)(Cart);
