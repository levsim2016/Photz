import React, { PureComponent } from 'react';
import './styles/Header.scss';

export default class Header extends PureComponent {
  render() {
    return (
      <header>
        {this.props.children}
      </header>
    );
  }
}
