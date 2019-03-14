import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Summary from "./components/Summary";
import IndicatorSelect from "./components/IndicatorSelect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Summary />
        <Chart />
        <IndicatorSelect />
      </div>
    );
  }
}

export default App;
