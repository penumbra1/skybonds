import React, { Component } from "react";
import Chart from "./components/Chart";
import ChartCard from "./components/ChartCard";
import IndicatorSelect from "./components/IndicatorSelect";
import PeriodSelect from "./components/PeriodSelect";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChartCard>
          <Chart />
          <IndicatorSelect />
          <PeriodSelect />
        </ChartCard>
      </div>
    );
  }
}

export default App;
