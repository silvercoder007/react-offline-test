import React from 'react';
import style from './footer.scss';
console.log('xx',style.footer);

export default function Footer() {
    return (
        <footer class='footer'>
            <h3 class='footer__heading'>KiWi Power</h3>
            <p class='footer__text'>We are the leading demand response aggregator, delivering significant revenues to large 
            users of electricity since 2009. Demand Response reduces electricity consumption at peak times. 
            This creates a greener, more cost effective grid, reduces the need for inefficient backup power stations and 
            provides balancing requirements and security of supply to System Operators and commercial sites.
            </p>
        </footer>
    )
};