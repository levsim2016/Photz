import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Menu.scss';

export default class Menu extends PureComponent {
  render() {
    return (
      <ul className="d-flex col-12 col-lg-4 menu">
        <li>
            <NavLink to="/" className="headerLink" activeClassName="current">Home</NavLink>
        </li>
        <li>
            <NavLink to="/gallery" className="headerLink" activeClassName="current">Gallery</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="headerLink" activeClassName="current">Contact</NavLink>
        </li>
      </ul>
    );
  }
}
