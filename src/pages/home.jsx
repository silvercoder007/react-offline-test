import React from 'react';
import './home.scss';
import Menu from '../components/menu.jsx';

const Home = () => {
    return (
        <Menu menuItems={['Green Energy', 'About', 'Careers', 'Contact Us']}/>
    )

};


export default Home;