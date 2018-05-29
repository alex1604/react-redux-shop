import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionRemoveTable, actionUndoTable} from '../actions/actions.js';
import InputChangeProd from './InputChangeProd';

class ChangeProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleRemove = (event) =>{
    let item = event.target.name;
    let action = actionRemoveTable(item);
    this.props.dispatch(action);
  };
  handleChange = (event) =>{
    console.log(event.target.name);
  }
  handleUndo = (event) => {
    let action = actionUndoTable();
    this.props.dispatch(action);
  };

  render(){
    // console.log(this.props.produkter);

    let adminList = this.props.produkter.map(
      (x, index) => (
        <div className="changeItem" key={index+x}>
          <li key={x}>{x.namn}, {x.pris} SEK, {x.antal} st.</li>
          <InputChangeProd name={index} produktNamn={x.namn} produktPris={x.pris}
          produktAntal={x.antal}/>
          <button name={index} onClick={this.handleChange}>Ändra</button>
          <button name={index} onClick={this.handleRemove}>Ta bort</button>
        </div>
      )
    )

    return(
      <div className="changeList">
        <h2>Ändra lista med produkter</h2>
        <ul>{adminList}</ul>
        <button onClick={this.handleUndo} disabled={!this.props.canUndo} className="undoBtn">Ångra</button>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return{
      produkter: state.produkter.present,
      canUndo: state.produkter.past.length >= 1
  }
}

export default connect(mapStateToProps)(ChangeProducts);
