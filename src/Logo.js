import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg';

export default class SocialIcons extends PureComponent {
	render() {
		return (
			<div className="d-flex col-12 col-lg-4 justify-content-lg-center">
				<Link to="/">
					<img src={logo} alt="Logo"/>
				</Link>
			</div>
		);
	}
}