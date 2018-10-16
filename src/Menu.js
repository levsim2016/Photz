import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Menu.scss';

//ссылки в меню будут менять на активные если компонент с состоянием
export default class Menu extends Component {
  render() {
    return (
      <nav className="d-flex col-12 col-lg-4 menu">
        <ul className="d-flex">
          <li>
              <NavLink exact to="/" className="headerLink" activeClassName="current">
                Начало
              </NavLink>
          </li>
          <li>
              <NavLink to="/gallery" className="headerLink" activeClassName="current">
                Работы
              </NavLink>
          </li>
          <li>
              <NavLink to="/contact" className="headerLink" activeClassName="current">
                Связаться со мной
              </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
