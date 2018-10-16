import React, { PureComponent } from 'react';
import './styles/Layout.scss';

export default class Layout extends PureComponent {
  render() {
    const { className, children } = this.props;
    return (
      <main className={"container-fluid d-flex layout " + className}>
        {children}
      </main>
    );
  }
}
