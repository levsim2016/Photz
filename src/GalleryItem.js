import React, { Component } from 'react';
import './styles/GalleryItem.scss';

export default class GalleryItem extends Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      className: this.props.className,
      previousClassName: ""
    }

    this.expandImage = this.expandImage.bind(this);
  }

  expandImage(){
    this.setState();
  }

  render() {
    const { image } = this.props;
    const { className } = this.state;
    return (
      <div className={"d-flex justify-content-center " + (className ? className : "") + " galleryItem"}>
        <img src={image} alt="img-1" className="galleryImage" onClick={this.expandImage}/>
      </div>
    );
  }
}
