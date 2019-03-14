import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { getDataForPeriod } from "../redux";
import { indicators } from "../redux/indicator";

const tickFormatter = iso => moment(iso).format("DD.MM");
const labelFormatter = iso => moment(iso).format("DD.MM.YYYY HH:MM");
const getNameFromKey = key => {
  if (key === indicators.YIELD) {
    key = "yield";
  }
  return `${key[0].toUpperCase()}${key.slice(1)}`;
};

const Chart = ({ data, dataKey }) => (
  <LineChart width={600} height={300} data={data}>
    <Line
      type="natural"
      dataKey={dataKey}
      stroke="#0033ff"
      dot={false}
      animationDuration={800}
      name={getNameFromKey(dataKey)}
    />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="date" tickFormatter={tickFormatter} />
    <YAxis />
    <Tooltip labelFormatter={labelFormatter} />
  </LineChart>
);

const mapStateToProps = state => ({
  data: getDataForPeriod(state),
  dataKey: state.indicator
});

export default connect(mapStateToProps)(Chart);
