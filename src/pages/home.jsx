import React from 'react';
import './home.scss';
import Menu from '../components/menu/menu.jsx';
import Chart from '../components/chart/chart.jsx';

const Home = () => {
    return (
        <>
        <Menu menuItems={['Green Energy', 'About', 'Careers', 'Contact Us']}/>
                <h2>Current mix of energy generation in the UK</h2>
        <Chart />
        </>
    )

};


export default Home;