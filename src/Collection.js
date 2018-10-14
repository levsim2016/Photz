import React, { PureComponent } from 'react';

export default class Collection extends PureComponent {
  render() {
    const { name, description, previewLink } = this.props.data;
    return (
      <div>
        <div>
            <img src={previewLink} alt="" />
        </div>
        <div>
            <div>
                <h2>{name}</h2>
            </div>            
            <div>
                {description}
            </div>
        </div>
      </div>
    );
  }
}
