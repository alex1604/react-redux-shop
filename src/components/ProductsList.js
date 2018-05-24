import React, {Component} from 'react';
// import produktObj from './products.json';
import {connect} from 'react-redux';
import {actionAddToEmptyShoppingList, actionAddToExistingShoppingList} from '../actions/actions.js'

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      }
      this.handleBuy = this.handleBuy.bind(this);
    }
  render(){
    console.log(this.props.produkter);
    let list = this.props.produkter.map(
			(x, index) => (
        <div className="productsItem" key={index}>
          <h3>{x.namn}</h3>
          <p>{x.pris} SEK, {x.antal} st.</p>
          <img src={require("../images/bord3.jpg")} alt="amazing table" />
          <button name={index} onClick={this.handleBuy}>KÖP</button>
        </div>
      )
    );
    return(
      <ul className="productsList">
        {list}
      </ul>
    )
  }
  handleBuy = event => {
    // this.setState eller this.props.x()
    let x = event.target.name;
    let alreadyAdded = false;
    let index;
      for (let el in this.props.kundvagn.previous){
        if(this.props.kundvagn.previous[el].namn === this.props.produkter[x].namn){
          alreadyAdded = true;
          index = el;
          console.log(index)
        }
      }
      if(!alreadyAdded){
        alert('product doesn`t exist');
        let action = actionAddToEmptyShoppingList({
          namn: this.props.produkter[x].namn,
          pris: this.props.produkter[x].pris,
          antal: 1,
        },);
      console.log('action=', action);
      this.props.dispatch(action);
      } else if (alreadyAdded){
        alert('product exists');

        let antal = this.props.kundvagn.previous[index].antal + 1;
        let action = actionAddToExistingShoppingList({
          index: index, antal: antal, lastAdded: {
            namn: this.props.produkter[x].namn,
            pris: this.props.produkter[x].pris,
            antal: 1,
          }
        },);
      console.log('action=', action);
      this.props.dispatch(action);
      }
	}
}

let mapStateToProps = state => {
	return {
    produkter: state.produkter.present,
    kundvagn: state.kundvagn
	}
};
export default connect(mapStateToProps)(ProductsList);
