import React from "react";
import moment from "moment";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Chart = ({ data, dataKey }) => (
  <LineChart width={600} height={300} data={data}>
    <Line type="natural" dataKey={dataKey} stroke="#0033ff" dot={false} />
    <CartesianGrid stroke="#ccc" />
    <XAxis
      dataKey="date"
      tickFormatter={isoTime => moment(isoTime).format("DD.MM")}
    />
    <YAxis />
  </LineChart>
);

export default Chart;
