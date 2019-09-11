import React from "react";
import PropTypes from "prop-types";
import "./menu.scss";

export default function Menu({ menuItems }) {
  if (!menuItems) return null;
  return (
    <header class="header">
      <a href="" class="logo">
        kiwipower
      </a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li>
          <a href="#work">{menuItems[0]}</a>
        </li>
        <li>
          <a href="#about">{menuItems[1]}</a>
        </li>
        <li>
          <a href="#careers">{menuItems[2]}</a>
        </li>
        <li>
          <a href="#contact">{menuItems[3]}</a>
        </li>
      </ul>
    </header>
  );
}

Menu.propTypes = {
  data: PropTypes.array
};
