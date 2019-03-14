import React, { Component } from "react";
import "./App.css";
import ChartContainer from "./containers/ChartContainer";
import Summary from "./containers/Summary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Summary />
        <ChartContainer />
      </div>
    );
  }
}

export default App;
