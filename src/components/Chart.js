import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Chart = ({ data, dataKey }) => (
  <LineChart width={600} height={300} data={data}>
    <Line type="natural" dataKey={dataKey} stroke="#0033ff" dot={false} />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="date" tickFormatter={iso => moment(iso).format("DD.MM")} />
    <YAxis />
  </LineChart>
);

const mapStateToProps = state => ({
  data: state.data.indicators,
  dataKey: state.indicator
});

export default connect(mapStateToProps)(Chart);
