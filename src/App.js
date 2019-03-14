import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Summary from "./components/Summary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Summary />
        <Chart />
      </div>
    );
  }
}

export default App;
