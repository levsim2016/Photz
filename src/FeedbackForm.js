import React, { PureComponent } from 'react';

export default class FeedbackForm extends PureComponent {
  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}
