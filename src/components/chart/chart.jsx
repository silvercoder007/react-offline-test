import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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
// console.log(anotherArray);
// // const data = [
// //   {
// //     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
// //   },
// //   {
// //     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
// //   },
// //   {
// //     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
// //   },
// //   {
// //     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
// //   },
// //   {
// //     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
// //   },
// //   {
// //     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
// //   },
// //   {
// //     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
// //   },
// // ];

// export default class Chart extends PureComponent {

//   render() {
//     return (
//       <BarChart
//         width={500}
//         height={300}
//         data={anotherArray}
//         margin={{
//           top: 5, right: 30, left: 20, bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="pv" fill="#8884d8" />
//         <Bar dataKey="uv" fill="#82ca9d" />
//       </BarChart>
//     );
//   }
// }


export default class Chart extends PureComponent {

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={anotherArray}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="percentage" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
