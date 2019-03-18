import React, { Component } from "react";
import { connect } from "react-redux";
import IsinInput from "./ISINInput";
import Chart from "./Chart";
import ChartCard from "./ChartCard";
import IndicatorSelect from "./IndicatorSelect";
import PeriodSelect from "./PeriodSelect";
import { fetchData } from "../redux/data";

class App extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.isin);
  }

  componentDidUpdate({ isin }) {
    if (isin !== this.props.isin) {
      this.props.fetchData(this.props.isin);
    }
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
  ...meta
});

const mapDispatchToProps = { fetchData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
