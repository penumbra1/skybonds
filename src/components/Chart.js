import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { getDataForPeriod } from "../redux";
import { indicators } from "../redux/indicator";
import { periods } from "../redux/period";

const tickFormatter = iso => moment(iso).format("DD.MM");
const labelFormatter = iso => moment(iso).format("DD.MM.YYYY HH:MM");
const getNameFromKey = key => {
  if (key === indicators.YIELD) {
    key = "yield";
  }
  return `${key[0].toUpperCase()}${key.slice(1)}`;
};

const Chart = ({ data, dataKey, showLabel }) => (
  <ResponsiveContainer width="100%" minHeight={320}>
    <LineChart data={data} key={dataKey}>
      <CartesianGrid stroke="#ccc" />
      <XAxis
        dataKey="date"
        tickFormatter={tickFormatter}
        interval="preserveEnd"
        minTickGap={10}
        tickCount={7}
        padding={{ left: 20, right: 20 }}
      />
      <YAxis
        interval="preserveStartEnd"
        domain={["auto", "auto"]}
        padding={{ top: 20 }}
        width={30}
      />
      <Line
        type="monotone"
        dataKey={dataKey}
        stroke="#0033ff"
        dot={false}
        label={showLabel && { dy: -10, backgroundColor: "white" }}
        animationDuration={900}
        name={getNameFromKey(dataKey)}
      />
      <Tooltip labelFormatter={labelFormatter} />
    </LineChart>
  </ResponsiveContainer>
);

const mapStateToProps = state => ({
  data: getDataForPeriod(state),
  dataKey: state.indicator,
  showLabel: state.period === periods.WEEK
});

export default connect(mapStateToProps)(Chart);
