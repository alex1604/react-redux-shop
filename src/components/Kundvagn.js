import React, {Component} from 'react';
// import produktObj from './products.json';
import {connect} from 'react-redux';

class Kundvagn extends Component {
  render(){
    console.log(this.props.produkter);
    /*let list = this.props.produkter.map(
			(x, index) => (
        <div className="productsItem" key={index}>
          <h3>{x.namn}</h3>
          <p>{x.pris} SEK, {x.antal} styck</p>
          <img src={require("../images/bord3.jpg")} alt="amazing table" />
          <button>KÖP</button>
        </div>
      )
    );*/

    return(
      null
    )
	}
}

let mapStateToProps = state => {
	return {
    produkter: state.produkter.present
	}
};
export default connect(mapStateToProps)(Kundvagn);
