import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionRemoveTable, actionUndoTable} from '../actions/actions.js'

class ChangeProducts extends Component {

  handleRemove = (event) =>{

    let item = event.target.name;
    let action = actionRemoveTable(item);
    this.props.dispatch(action);
  };
  handleUndo = (event) => {
    let action = actionUndoTable();
    this.props.dispatch(action);
  };

  render(){
    console.log(this.props.produkter);
    let adminList = this.props.produkter.map(
      (x, index) => (
        <div className="changeItem" key={index+x}>
          <li key={x}>{x.namn}, {x.pris}, {x.antal} st.</li>
          <button>Ändra</button>
          <button name={index}onClick={this.handleRemove}>Ta bort</button>
        </div>
      )
    )

    return(
      <div className="changeList">
        <h2>Ändra lista med produkter</h2>
        <ul>{adminList}</ul>
        <button onClick={this.handleUndo} className="undoBtn">Ångra</button>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return{
      produkter: state.produkter.present,
  }
}

export default connect(mapStateToProps)(ChangeProducts);
