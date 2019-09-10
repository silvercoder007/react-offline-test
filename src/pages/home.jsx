import React from 'react';
import './home.scss';
import Menu from '../components/menu/menu.jsx';
import Chart from '../components/chart/chart.jsx';

const Home = () => {
    return (
        <>
        <Menu menuItems={['Green Energy', 'About', 'Careers', 'Contact Us']}/>
        <Chart />
        </>
    )

};


export default Home;