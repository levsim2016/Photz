import React, { PureComponent } from 'react';

export default class Layout extends PureComponent {
  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}
