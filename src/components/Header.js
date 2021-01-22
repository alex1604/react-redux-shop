import React, { Component } from "react";
import Cart from "./Cart.js";
import { actionSelectTab } from "../actions/actions.js";
import { connect } from "react-redux";

class Header extends Component {
  showTab = (param) => {
    let action = actionSelectTab(param);
    this.props.dispatch(action);
  };

  get currentTab() {
    return this.props.tab[0];
  }

  isCurrentTab = (tabName) => {
    return tabName === this.currentTab;
  };

  render() {
    return (
      <header className="App-header">
        <div id="logo">
          <p className="App-title">The Table Shop</p>
        </div>
        <nav className="navbar">
          <li>
            <a
              onClick={() => this.showTab("products")}
              className={`${this.isCurrentTab("products") ? "active" : ""}`}
            >
              Products
            </a>
          </li>
          <li>
            <a
              onClick={() => this.showTab("admin")}
              className={`${this.isCurrentTab("admin") ? "active" : ""}`}
            >
              Admin
            </a>
          </li>
          <li>
            <a
              onClick={() => this.showTab("hist")}
              className={`${this.isCurrentTab("hist") ? "active" : ""}`}
            >
              History
            </a>
          </li>
          <li>
            <Cart />
          </li>
        </nav>
      </header>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    tab: state.tab,
  };
};
export default connect(mapStateToProps)(Header);
