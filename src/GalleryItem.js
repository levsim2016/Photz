import React, { Component } from 'react';
import './styles/GalleryItem.scss';
import { TweenLite, Power3 } from 'gsap';

export default class GalleryItem extends Component {
  constructor(props){
    super(props);
    this.props = props;

    const defaultClassName = this.props.defaultClassName ? this.props.defaultClassName : "";
    this.state = {
      isFullResMode: false,
      className: "d-flex justify-content-center " + defaultClassName + " galleryItem"
    }

    this.animation = null;
    this.domNode = null;

    this.expandImage = this.expandImage.bind(this);
    this.getNode = this.getNode.bind(this);
    this.playIncreaseAnimation = this.playIncreaseAnimation.bind(this);
    this.reverseIncreaseAnimation = this.reverseIncreaseAnimation.bind(this);
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

  playIncreaseAnimation(){
    this.animation = TweenLite.to(this.domNode, 0.4, { width: "105%", height: "105%", ease: Power3.easeIn });
  }

  reverseIncreaseAnimation(){
    //this.animation.reverse();
  }

  getNode(node){
    this.domNode = node;
  }

  render() {
    const { image } = this.props;
    const { className } = this.state;
    return (
      <div className={className + " justify-content-center align-items"}>
        <img src={image} alt="img-1" ref={this.getNode}
          className="galleryImage" onClick={this.expandImage} 
          onMouseEnter={this.playIncreaseAnimation} onMouseLeave={this.reverseIncreaseAnimation}/>
      </div>
    );
  }
}
