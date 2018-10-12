import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  render() {
    const { className } = this.props;
    return (
      <header className={className}>
        {this.props.children}
      </header>
    );
  }
}
