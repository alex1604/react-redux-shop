import React, { Component } from "react";
import { connect } from "react-redux";
import { actionRemoveTable, actionUndoTable } from "../actions/actions.js";
import InputChangeProd from "./InputChangeProd";

class ChangeProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    };
  }

  handleRemove = (event) => {
    let item = event.target.name;
    let action = actionRemoveTable(item);
    this.props.dispatch(action);
  };
  handleChange = (event) => {};
  handleUndo = (event) => {
    let action = actionUndoTable();
    this.props.dispatch(action);
  };

  render() {
    let adminList = this.props.produkter.map((x, index) => (
      <div className="changeItem" key={index + x}>
        <li key={x}>
          {x.namn}, {x.pris} EUR/ {x.antal} unit
        </li>
        <InputChangeProd
          name={index}
          produktNamn={x.namn}
          produktPris={x.pris}
          produktAntal={x.antal}
        />
        <button
          name={index}
          disabled={this.state.disabled}
          onClick={this.handleChange}
        >
          Change
        </button>
        <button name={index} onClick={this.handleRemove}>
          Remove
        </button>
      </div>
    ));

    return (
      <div className="changeList">
        <h2>Change list of products</h2>
        <ul>{adminList}</ul>
        <button
          onClick={this.handleUndo}
          disabled={!this.props.canUndo}
          className="undoBtn"
        >
          Undo
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    produkter: state.produkter.present,
    canUndo: state.produkter.past.length >= 1,
  };
};

export default connect(mapStateToProps)(ChangeProducts);
