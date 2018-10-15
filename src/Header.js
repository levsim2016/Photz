import React, { PureComponent } from 'react';
import './styles/Header.scss';

export default class Header extends PureComponent {
  render() {
    return (
      <header className="container-fluid">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {this.props.children}
          </div>          
        </div>        
      </header>
    );
  }
}
