import React from 'react';

export default class WorkExperience extends React.Component{
	render(){
		return (
			<div className="experience">
				<div className="experience-component">
					<h1 className="component-title">Experience</h1>
					<div className="title-separator">
					</div>
					<div className="card-front">
						<h1>
                            Amazon
							<span>
								Seattle, WA
							</span>
						</h1>
						<div className="card-content">
							<div className="company-logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/603px-Amazon_logo_plain.svg.png" alt="amazon_logo" />
							</div>
							<div className="separator-line">
							</div>
							<div className="company-information">
								<div className="company-job-title">
									<h2>Software Engineer</h2>
									<h3>09/'18 - Now</h3>
								</div>
								<h4>Description tbd</h4>
								<ul>
									<li>
                                        Bullet points tbd
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

