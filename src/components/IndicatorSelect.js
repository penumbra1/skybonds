import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
import { indicators, setIndicator } from "../redux/indicator";

const Option = Select.Option;

const IndicatorSelect = ({ indicator, setIndicator }) => {
  return (
    <Select
      defaultValue={indicator}
      onChange={setIndicator}
      className="mv16"
      style={{ width: 100 }}
    >
      <Option value={indicators.PRICE}>Price</Option>
      <Option value={indicators.YIELD}>Yield</Option>
      <Option value={indicators.SPREAD}>Spread</Option>
    </Select>
  );
};

const mapStateToProps = ({ indicator }) => ({
  indicator
});
const mapDispatchToProps = { setIndicator };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndicatorSelect);
