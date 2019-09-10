import React from 'react';
import './menu.scss';

export default function Menu({menuItems}) {
    if (!menuItems && menuItems.length) return null;
    return (
        <>
        {menuItems.length && (
        <header class="header">
            <a href="" class="logo">CSS Nav</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                <li><a href="#work">{menuItems[0]}</a></li>
                <li><a href="#about">{menuItems[1]}</a></li>
                <li><a href="#careers">{menuItems[2]}</a></li>
                <li><a href="#contact">{menuItems[3]}</a></li>
            </ul>
        </header>
        )}
        </>
    );
}