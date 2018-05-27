import React, {Component} from 'react';
import {actionAddTable} from '../actions/actions.js'
import {connect} from 'react-redux';
// import ProductsList from './ProductsList.js';
import ChangeProducts from './ChangeProducts.js';

class Form extends Component{
  constructor(props) {
    super(props);
    this.state = { inputNamn:'',
              inputPris: '',
              inputAntal: '',
              disabled: true,}
  }
  render(){
    return(
      <div className="form">
        <h2>Administrera produkter: </h2>
        <input  placeholder="Produktens namn"
                type="text"
                maxLength="20" required
                value={this.state.inputNamn}
                onChange={e => this.setState({inputNamn: e.target.value, disabled:false})}/>
        <input  type="number"
                min="0" required
                placeholder="Pris"
                value={this.state.inputPris}
                onChange={e => this.setState({inputPris: e.target.value, disabled:false})}/>
        <input  type="number"
                min="0"  required
                placeholder="Antal"
                value={this.state.inputAntal}
                onChange={e => this.setState({inputAntal: e.target.value, disabled:false})}/>
        <button className="formBtn" disabled={this.state.disabled} onClick={this.handleClickAddTable}>Lägg till produkt</button>
        <ChangeProducts/>
      </div>
    )
  }

  handleClickAddTable = event => {
    console.log(this.state);
    let action = actionAddTable({
        namn: this.state.inputNamn,
        pris: Number(this.state.inputPris),
        antal: Number(this.state.inputAntal),
      },);
    // console.log('action=', action);
    this.props.dispatch(action);
    this.setState({inputNamn: '', inputPris:'', inputAntal:'', disabled:true});
  }
}
let mapStateToProps = state => {
	return {
     produkter: state.produkter.present,
	}
};

export default connect(mapStateToProps)(Form);
