import React, { Component } from "react";
import { connect } from "react-redux";
import IsinInput from "./components/ISINInput";
import Chart from "./components/Chart";
import ChartCard from "./components/ChartCard";
import IndicatorSelect from "./components/IndicatorSelect";
import PeriodSelect from "./components/PeriodSelect";
import { fetchData } from "./redux/data";

class App extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.isin);
  }

  componentDidUpdate() {
    this.props.fetchData(this.props.isin);
  }

  render() {
    return (
      <div className="container">
        <IsinInput />
        <ChartCard {...this.props}>
          <Chart />
          <div className="controls">
            <IndicatorSelect />
            <PeriodSelect />
          </div>
        </ChartCard>
      </div>
    );
  }
}

const mapStateToProps = ({ data: { isin, dataPoints, ...meta } }) => ({
  isin,
  hasData: dataPoints.length > 0,
  ...meta
});

const mapDispatchToProps = { fetchData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
