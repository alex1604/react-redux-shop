import React, { Component } from "react";

class Historik extends Component {
  render() {
    let actionsList = this.props.historyList.map((x, index) => (
      <li key={index}>action: {x}</li>
    ));
    return (
      <div className="historyList">
        <h3>Session log</h3>
        {actionsList}
      </div>
    );
  }
}

export default Historik;
