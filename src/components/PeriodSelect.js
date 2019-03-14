import React from "react";
import { connect } from "react-redux";
import { Radio } from "antd";
import { periods, setPeriod } from "../redux/period";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const PeriodSelect = ({ period, setPeriod }) => {
  return (
    <RadioGroup onChange={e => setPeriod(e.target.value)} defaultValue={period}>
      <RadioButton value={periods.WEEK}>Week</RadioButton>
      <RadioButton value={periods.MONTH}>Month</RadioButton>
      <RadioButton value={periods.QUARTER}>Quarter</RadioButton>
      <RadioButton value={periods.YEAR}>Year</RadioButton>
      <RadioButton value={periods.MAX}>Max</RadioButton>
    </RadioGroup>
  );
};

const mapStateToProps = ({ period }) => ({
  period
});
const mapDispatchToProps = { setPeriod };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeriodSelect);
