import React, { Component } from 'react';
// import produktObj from './products.json';
import { connect } from 'react-redux';
import { actionAddToEmptyShoppingList, actionAddToExistingShoppingList, actionRemoveOneTable } from '../actions/actions.js'

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {

      }
      this.handleBuy = this.handleBuy.bind(this);
    }
  render() {
    console.log(this.props.produkter);
    let list = this.props.produkter.map(
      (x, index) => (
        <div className="productsItem" key={index}>
          <h2>{x.namn}</h2>
          <p>{x.pris} SEK/st.</p>
          <p><em>{x.antal} st. i lager</em></p>
          <img src={require("../images/bord3.jpg")} alt="amazing table" />
          <button name={index} onClick={this.handleBuy}>KÖP</button>
        </div>
      )
    );
    return (
      <ul className="productsList">
        {list}
      </ul>
    )
  }
  handleBuy = event => {
    // this.setState eller this.props.x()
    let x = event.target.name;
    let howManyInStock = this.props.produkter[x].antal;
    let alreadyAdded = false;
    let index;
    for (let el in this.props.kundvagn.previous) {
      if (this.props.kundvagn.previous[el].namn === this.props.produkter[x].namn) {
        alreadyAdded = true;
        index = el;
        console.log(index)
      }
    }
    if (!alreadyAdded && howManyInStock !== 0) {
      let action = actionAddToEmptyShoppingList({
        total: Number(this.props.shoppingbasket.total) + Number(this.props.produkter[x].pris),
        object: {
          namn: this.props.produkter[x].namn,
          pris: this.props.produkter[x].pris,
          antal: 1,
        }
      }, );
      console.log('action=', action);
      this.props.dispatch(action);

      let newStateProdukter = [...this.props.produkter];
      newStateProdukter[x].antal = newStateProdukter[x].antal - 1;
      let updateStock = actionRemoveOneTable(
        newStateProdukter
      );
      this.props.dispatch(updateStock);

    } else if (alreadyAdded && howManyInStock !== 0) {

      let antal = this.props.kundvagn.previous[index].antal + 1;
      let action = actionAddToExistingShoppingList({
        index: index,
        antal: antal,
        total: Number(this.props.shoppingbasket.total) + Number(this.props.produkter[x].pris),        lastAdded: {
          namn: this.props.produkter[x].namn,
          pris: this.props.produkter[x].pris,
          antal: 1,
        }
      }, );
      console.log('action=', action);
      this.props.dispatch(action);
      let newStateProdukter = [...this.props.produkter];
      newStateProdukter[x].antal = newStateProdukter[x].antal - 1;
      let updateStock = actionRemoveOneTable(
        newStateProdukter
      );
      this.props.dispatch(updateStock);
    }
  }
}

let mapStateToProps = state => {
  return {
    produkter: state.produkter.present,
    kundvagn: state.kundvagn,
    shoppingbasket: state.kundvagn
  }
};
export default connect(mapStateToProps)(ProductsList);
