import React, { Component } from "react";
import { actionAddTable } from "../actions/actions.js";
import { connect } from "react-redux";
import ChangeProducts from "./ChangeProducts.js";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNamn: "",
      inputPris: "",
      inputAntal: "",
      disabled: true,
    };
  }
  render() {
    return (
      <div className="form">
        <h2>Manage products: </h2>
        <input
          placeholder="Product name"
          type="text"
          maxLength="20"
          required
          value={this.state.inputNamn}
          onChange={(e) =>
            this.setState({ inputNamn: e.target.value, disabled: false })
          }
        />
        <input
          type="number"
          min="0"
          required
          placeholder="Price"
          value={this.state.inputPris}
          onChange={(e) =>
            this.setState({ inputPris: e.target.value, disabled: false })
          }
        />
        <input
          type="number"
          min="0"
          required
          placeholder="Amount in stock"
          value={this.state.inputAntal}
          onChange={(e) =>
            this.setState({ inputAntal: e.target.value, disabled: false })
          }
        />
        <button
          className="formBtn"
          disabled={this.state.disabled}
          onClick={this.handleClickAddTable}
        >
          Add a product
        </button>
        <ChangeProducts />
      </div>
    );
  }

  handleClickAddTable = (event) => {
    let action = actionAddTable({
      namn: this.state.inputNamn,
      pris: Number(this.state.inputPris),
      antal: Number(this.state.inputAntal),
    });
    this.props.dispatch(action);
    this.setState({
      inputNamn: "",
      inputPris: "",
      inputAntal: "",
      disabled: true,
    });
  };
}
let mapStateToProps = (state) => {
  return {
    produkter: state.produkter.present,
  };
};

export default connect(mapStateToProps)(Form);
