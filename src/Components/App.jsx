import React from 'react';

import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Widgets from './Widgets';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {selectedNavBarItem: "Home"};
		this.navbarListItemClicked = this.navbarListItemClicked.bind(this);
	}
	navbarListItemClicked(item){
		this.setState({selectedNavBarItem: item})
	}
	render(){
		let componentToShow;
		switch(this.state.selectedNavBarItem){
			case "Home":
				componentToShow = <Home />;
				break;
			case "About":
				componentToShow = <About />;
				break;
			case "Education":
				componentToShow = <Education />;
				break;
			case "Experience":
				componentToShow = <WorkExperience />;
				break;
			case "Widgets":
				componentToShow = <Widgets />;
				break;
			default:
				componentToShow = <Home />;
				break;
		}
		return (
		<div>
			<NavBar navbarListItemClicked={this.navbarListItemClicked} activeComponent={this.state.selectedNavBarItem}/>
			<div className="app-body">{componentToShow}</div>
		</div>

		);
	}
}

