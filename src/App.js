import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Header from "./components/Header.js";
import TabContent from "./components/Tab.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TabContent />
      </div>
    );
  }
}
export default App;
