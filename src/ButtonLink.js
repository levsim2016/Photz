import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class ButtonLink extends PureComponent {
  render() {
    const { className, children, to } = this.props;
    return (
      <Link to={to} className={"d-flex align-items-center justify-content-center button " + className}>
        {children}
      </Link>
    );
  }
}
