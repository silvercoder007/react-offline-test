import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import style from "./chart.scss";

export default function Chart({ data }) {
  const { generationmix } = data;
  const dataArray = generationmix.map(fuel => ({
    name: fuel.fuel,
    percentage: fuel.perc
  }));
  return (
    <section>
      <LineChart width={800} height={500} data={dataArray}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="percentage"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </section>
  );
}

Chart.propTypes = {
  data: PropTypes.array
};
