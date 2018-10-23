import React from 'react';

export default class Education extends React.Component{
	render(){
		return (
			<div className="education-component">
                <div className="portrait-container">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png" alt=""/>
                </div>
				<h1>Education</h1>
				<div className="location-container">
					<h3>University of Waterloo - Waterloo, Canada.</h3>
				</div>
				<ul className="education-body">
					<li className="education-entry">
						<div className="education-degree-container">
							<h2>BASc, Computer Engineering</h2>
							<div className="education-degree-information">
								<h6>09/'13 - 06/'18</h6>
								<h5>91% GPA</h5>
							</div>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
