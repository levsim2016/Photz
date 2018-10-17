import React, { PureComponent } from 'react';
import './styles/Gallery.scss';
import img1 from './images/img 1.png';
import img2 from './images/img 2.png';
import img3 from './images/img 3.png';
import img4 from './images/img 4.png';

export default class Gallery extends PureComponent {
  render() {
    return (
      <>
        <div className="row gallery">
          <div className="d-flex col-12 col-lg-8 justify-content-center">
            <img src={img1} alt="img-1"/>
          </div>
          <div className="d-flex col-12 col-lg-4 align-content-between flex-wrap">
            <div className="d-flex col-lg-12 col-6 justify-content-center">
              <img src={img2} alt="img-2" />
            </div>
            <div className="d-flex col-lg-12 col-6 justify-content-center">
              <img src={img3} alt="img-3" />
            </div>
          </div>
          <div className="d-flex col-12 justify-content-center">
            <img src={img4} alt="img-4"/>
          </div>        
        </div>
      </>
    );
  }
}
