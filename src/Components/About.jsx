import React from 'react';
import timtong from '../Assets/timothytong.jpg';

export default class About extends React.Component{
	render(){
		return (
			<div className="about-component">
				<div className="portrait-container">
					<img src={timtong} alt="portrait"/>
				</div>
				<h1>About Me</h1>
				<div className="about-body"></div>
			</div>
		);
	}
}
