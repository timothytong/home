import React from 'react';
import axios from 'axios';
import ReactToggle from 'react-toggle-button';

export default class Weather extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getWeather = this.getWeather.bind(this);
		this.state = {loading: true, city: "Rochester", useFahrenheit: false};
	}

	handleChange(event) {
	    this.setState({city: event.target.value});
	}

	getWeather() {
		const that = this;
		that.setState({loading: true});
		axios.get('http://api.openweathermap.org/data/2.5/weather', 
		{
			params: {
				q: that.state.city,
				appid: "3c5d7516670f98c3116a0df530983ae2",
			}
		})
		.then(function (response) {
			that.setState({loading: false, weather: response.data});
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.getWeather();
	}

	render(){
		let content = <h1>Loading...</h1>;
		if (!this.state.loading) {
			const weather = this.state.weather;
			const conditions = weather.weather[0].description;
			const useFahrenheit = this.state.useFahrenheit;
			let temp = 0;
			let units = "";

			if (useFahrenheit) {
				temp = Math.round(((9/5)*(weather.main.temp - 273) + 32)*10)/10;
				units = "°F";
			} else {
				temp = Math.round((weather.main.temp - 273)*10)/10;
				units = "°C";
			}

			
			const city = weather.name;
			content = <h1>Weather in {city}: {conditions} with a temperature of {temp}{units}</h1>;
		}
		return (
			<div className="widget-component">
				{content}
				<form onSubmit={this.handleSubmit}>
        			<label>
          			Name:
          				<input type="text" onChange={this.handleChange} />
        			</label>
        			<input type="submit" value="Submit" />
      			</form>
      			<ReactToggle 
      				inactiveLabel={"°C"}
  					activeLabel={"°F"}
  					value={this.state.useFahrenheit}
  					onToggle={(value) => {
    					this.setState({
      						useFahrenheit: !value,
    					})
  					}} />
			</div>
		);
	}

	componentDidMount() {
		this.getWeather();
	}

}