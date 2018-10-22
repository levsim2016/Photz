import React, { PureComponent } from 'react';
import './styles/SocialIcons.scss';
import behance from './images/behance.svg';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import instagram from './images/instagram.svg';

export default class SocialIcons extends PureComponent {
  render() {
    return (
      <div className="d-none d-lg-flex col-12 col-lg-4 justify-content-end socialIcons">
        <img src={behance} alt="Behance" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={instagram} alt="Instagram" />
      </div>
    );
  }
}
