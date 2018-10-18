import React, { PureComponent } from 'react';
import GalleryItem from './GalleryItem';
import './styles/Gallery.scss';
import img1 from './images/img 1.png';
import img2 from './images/img 2.png';
import img3 from './images/img 3.png';
import img4 from './images/img 4.png';

export default class Gallery extends PureComponent {
  render() {
    return (
      <>
        <div className="d-flex row gallery flex-wrap flex-column justify-content-between" style={{ height: 770 }}>
          <GalleryItem image={img1} />
          <GalleryItem image={img2} />
          <GalleryItem image={img3} />   
        </div>
        <GalleryItem image={img4} />
      </>
    );
  }
}
