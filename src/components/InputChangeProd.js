import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionChangeTable} from '../actions/actions.js'

class InputChangeProd extends Component{
  constructor(props){
    super(props);
    this.state ={ nyNamn:'', nyPris:'', nyAntal:'', disabled: true }
  }
  render(){
    return(
      <div>
        <input type="text"
        placeholder={this.props.produktNamn}
        value={this.state.nyNamn}
        onChange={e=>this.setState({nyNamn:e.target.value, disabled: false})}
        maxLength="20"/>
        <input type="number"
        value={this.state.nyPris}
        placeholder={this.props.produktPris}
        onChange={e=>this.setState({nyPris:e.target.value, disabled: false})}
        min="0"/>
        <input type="number"
        value={this.state.nyAntal} placeholder={this.props.produktAntal}
        onChange={e=>this.setState({nyAntal:e.target.value, disabled: false})}
        min="0"/>
        <button className="saveBtn" disabled={this.state.disabled} name={this.props.name} onClick={this.handleSaveTable}>Spara</button>
      </div>
    );
  }
  handleSaveTable = (event) => {
    // console.log(event.target.name);
    let index = event.target.name;

    let oldProduct = {
      namn: this.props.produktNamn,
      pris: Number(this.props.produktPris),
      antal: Number(this.props.produktAntal),
    };

    let changedProduct={
      namn: this.state.nyNamn,
      pris: Number(this.state.nyPris),
      antal: Number(this.state.nyAntal),
    };

    let action = actionChangeTable(index, oldProduct, changedProduct);
    this.props.dispatch(action);
    this.setState({ nyNamn:'', nyPris:'', nyAntal:'', disabled: true });
  };
}
let mapStateToProps = state =>{
  return {
    produkter: state.produkter.present,
  }
}
export default connect(mapStateToProps)(InputChangeProd);
