import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import style from './chart.scss';

function processData (array) {
  const anotherArray = [];
  const newData = array.map((fuel) => {
  const newFuelObject = {
    name: fuel.fuel,
    percentage: fuel.perc
  }
  anotherArray.push(newFuelObject);
});
return anotherArray;
};

export default function Chart ({data}) {

    const { generationmix } = data;
    console.log(data && generationmix);
    const dataArray = processData(generationmix && generationmix);
    return (
    <section>
      <LineChart
        width={800}
        height={500}
        data={dataArray}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="percentage" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      </section>
    );
}
