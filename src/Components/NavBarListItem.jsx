import React from 'react';

export default class NavBarListItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){
		let cssClass = "";
		if (this.props.currentActiveComponent === this.props.componentID) {
			cssClass += "active ";
		}
		if (this.state.hover === true) {
			cssClass += "slide-in highlighted ";
		} else if (this.state.hover !== undefined) {
			cssClass += "slide-out normal ";
		}
		return (
			<li
				onMouseLeave={(e) => this.setState({hover: false})}
				onMouseEnter={(e) => this.setState({hover: true})}
				onClick={() => this.props.itemClicked(this.props.componentID)}
				className={cssClass}
			>
				{this.props.text}
			</li>
		);
	}
}