import React, { PureComponent } from 'react';
import logo from './images/logo.svg';

export default class SocialIcons extends PureComponent {
	render() {
		return (
			<div className="d-flex col-12 col-lg-4 justify-content-center">
				<img src={logo} alt="Logo"/>
      </div>
		);
	}
}