import React from 'react';
import NavBarListItem from './NavBarListItem';

export default class NavBar extends React.Component{
	render(){
		let topButton = "";
		if (this.props.activeComponent !== "Home") {
			topButton = <a onClick={() => {}} className="navbar-top-button">KYT</a>;
		}
		return (
			<div className="navbar">
				{topButton}
				<h3 className="navbar-spacer"></h3>
				<ul className="horizontal-nav-ul">
					<NavBarListItem text="Home" componentID="Home" itemClicked={this.props.navbarListItemClicked} currentActiveComponent={this.props.activeComponent}/>
					<NavBarListItem text="About" componentID="About" itemClicked={this.props.navbarListItemClicked} currentActiveComponent={this.props.activeComponent}/>
					<NavBarListItem text="Education" componentID="Education" itemClicked={this.props.navbarListItemClicked} currentActiveComponent={this.props.activeComponent}/>
					<NavBarListItem text="Experience" componentID="Experience" itemClicked={this.props.navbarListItemClicked} currentActiveComponent={this.props.activeComponent}/>
					<NavBarListItem text="Widgets" componentID="Widgets" itemClicked={this.props.navbarListItemClicked} currentActiveComponent={this.props.activeComponent}/>
				</ul>
			</div>


		);
	}
}
