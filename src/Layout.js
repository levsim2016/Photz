import React, { PureComponent } from 'react';
import './styles/Layout.scss';

export default class Button extends PureComponent {
  render() {
    const { className, children } = this.props;
    return (
      <section className={"container-fluid d-flex layout " + className}>
        {children}
      </section>
    );
  }
}
