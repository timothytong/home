import React from 'react';
import Typist from 'react-typist';

export default class Home extends React.Component{
	render(){
		return (
			<div className="home-component">
				<h1 className="home-title-name">Timothy Tong</h1>
				<h2 className="home-subtitle-about">
                <Typist>
                    <Typist.Delay ms={500} />
                    <span>I love to code.</span>
                    <Typist.Backspace count={5} delay={2200} />
                    <Typist.Delay ms={500} />
                    <span>solve problems.</span>
                    <Typist.Backspace count={15} delay={2200} />
                    <Typist.Delay ms={500} />
                    <span>change the world.</span>
                </Typist>
                </h2>
				<ul className="home-social-btns">
               		<li><a href="https://github.com/timothytong"><i className="fa fa-github"></i></a></li>
              		<li><a href="http://www.linkedin.com/in/kyttong"><i className="fa fa-linkedin"></i></a></li>
              		<li><i className="fa fa-id-badge"></i></li>
           		</ul>
			</div>
		);
	}
}
