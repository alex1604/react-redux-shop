import React, {Component} from 'react';

class Historik extends Component{
  render(){
    let actionsList = this.props.historyList.map(
      (x, index) => (
        <li key={index}>action: {x}</li>
      )
    )
      console.log(this.props.historyList);
    return(
      <div className="historyList">
        <h3>Historik av actions:</h3>
        {actionsList}
      </div>
    )
  }
}

export default Historik;
