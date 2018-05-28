import React, { Component } from 'react';
// import produktObj from './products.json';
import { connect } from 'react-redux';
import './Kundvagn.css'

class Kundvagn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  /*componentWillMount(){
    let kundvagn = this.props.kundvagn;
    let price = 0;
    for (let x in kundvagn){
      price += kundvagn[x].antal*kundvagn[x].pris;
    }
    this.setState({price: price});
  }*/
  render() {
    console.log(this.props.kundvagn);
    let list = this.props.kundvagn.map(
      (x, index) => (
        <div className="kundvagnItem" key={index}>
          <img src={require("../images/bord3.jpg")} alt="amazing table" />
          <div className='productInfo'>
            <h4>{x.namn} ( {x.pris} SEK / st. )</h4>
            <h5>{x.antal} st. = {x.pris*x.antal} SEK </h5>
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
