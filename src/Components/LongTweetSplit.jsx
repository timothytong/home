import React from 'react';
import ReactToggle from 'react-toggle-button';

export default class LongTweetSplit extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getMessage = this.getMessage.bind(this);
		this.state = {message: "", splitTweets: []};
	}

	handleChange(event) {
		this.setState({message: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.getMessage();
	}

	getMessage() {
		let message = this.state.message;
		const maxTweetLength = 140;
		const numberOfTweetsRequired = Math.ceil(message.length/maxTweetLength);
		const paddedLength = 2*numberOfTweetsRequired.toString().length + 4;
		const splitTweets = [];
		let canContinue = true;
		const denominatorLength = numberOfTweetsRequired.toString().length;

		if (message.length > maxTweetLength) {
			while (message.length > maxTweetLength) {
				const numeratorLength = (splitTweets.length+1).toString().length;
				const adjustedPaddedLength = paddedLength - (denominatorLength - numeratorLength);
				const start = maxTweetLength - 1 - adjustedPaddedLength;
				const finish = start - 15;

				for (let i = start; i >= finish; i--) {	
					if (message[i] === ' ') {
						splitTweets.push(message.substring(0,i));
						message = message.slice(i);	
						canContinue = false;
						break;
					}
				}
				if (canContinue) {
					splitTweets.push(message.substring(0,start));
					message = message.slice(maxTweetLength-1);
				}
			}

			splitTweets.push(message);

			for (let j = 0; j<splitTweets.length; j++) {
				let tweetPage = j+1;
				splitTweets[j] += " (" + tweetPage + "/" + splitTweets.length + ")";
			}

			this.setState({splitTweets}); // short hand for this.setState({splitTweets: splitTweets});
		}

	} 

	render() {

		let content = '';
		const {splitTweets} = this.state; // shorthand notation for const splitTweets = this.state.splitTweets;

		if (splitTweets.length > 0) {
			content = (
				<ul> 
					{splitTweets.map((tweet, i) => <li key={i}>{tweet}</li>)}
				</ul>
			);
		}

		return (
			<div className = "widget-component">
				<form onSubmit={this.handleSubmit}>
        			<label>
          			Enter tweet:
          				<textarea type="text" onChange={this.handleChange} />
        			</label>
        			<input type="submit" value="Submit" />
      			</form>
      			{content}
			</div>
			
		);
		
	}

}