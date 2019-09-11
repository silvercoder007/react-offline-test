import React from 'react';
import Home from './pages/home.jsx';

//fetching the data using native JS fetch

let energyData = {};

fetch('https://api.carbonintensity.org.uk/generation') // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json())
.then(function(data) {
    console.log(data.data);
    energyData = data.data;
})
.catch(function(error) {
    console.log(error);
  });

const App = () => <Home data={energyData}/>;

export {
    App
}