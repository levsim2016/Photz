import React, { Component } from 'react';
import './styles/GalleryItem.scss';

export default class GalleryItem extends Component {
  constructor(props){
    super(props);
    this.props = props;

    const defaultClassName = this.props.defaultClassName ? this.props.defaultClassName : "";
    this.state = {
      isFullResMode: false,
      className: "d-flex justify-content-center " + defaultClassName + " galleryItem"
    }

    this.expandImage = this.expandImage.bind(this);
  }

  expandImage(e){
    console.log({...e.target});
    console.log(e.target.naturalWidth + " & " + e.target.naturalHeight);

    const { isFullResMode } = this.state;
    if(isFullResMode){
      this.setState({ 
        isFullResMode: false,
        className: "d-flex justify-content-center galleryItem"
      });
    }
    else{
      this.setState({ 
        isFullResMode: true,
        className: "d-flex justify-content-center galleryItem fullres"
      });
    }    
  }

  render() {
    const { image } = this.props;
    const { className } = this.state;
    return (
      <div className={className}>
        <img src={image} alt="img-1" className="galleryImage" onClick={this.expandImage}/>
      </div>
    );
  }
}
