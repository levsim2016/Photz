import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends PureComponent {
  render() {
    return (
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  }
}
