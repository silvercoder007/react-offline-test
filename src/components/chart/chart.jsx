import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import style from './chart.scss';

const testdata = {
  "data": {
    "from": "2019-08-12T12:30Z",
    "to": "2019-08-12T13:00Z",
    "generationmix": [
      {
        "fuel": "biomass",
        "perc": 4.8
      },
      {
        "fuel": "coal",
        "perc": 2.5
      },
      {
        "fuel": "imports",
        "perc": 8.7
      },
      {
        "fuel": "gas",
        "perc": 46.5
      },
      {
        "fuel": "nuclear",
        "perc": 16.1
      },
      {
        "fuel": "other",
        "perc": 0.3
      },
      {
        "fuel": "hydro",
        "perc": 0.9
      },
      {
        "fuel": "solar",
        "perc": 14.6
      },
      {
        "fuel": "wind",
        "perc": 5.6
      }
    ]
  }
}
// console.log(data);

const tempArray = testdata.data.generationmix;
const anotherArray = [];

function processData (array) {
  const newData = tempArray.map((fuel) => {
  const newFuelObject = {
    name: fuel.fuel,
    percentage: fuel.perc
  }
  anotherArray.push(newFuelObject);
});
};

processData(testdata);


export default class Chart extends Component {




  render() {
   console.log(this.props.data);
   const temp = this.props.data;
   console.log('temp', temp.data);
    return (
    <section>
      <LineChart
        width={800}
        height={500}
        data={anotherArray}
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
}
