import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this);
		this.handleTyping = this.handleTyping.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			isClicked: false,
			title: "",
			url: "",
		};

	}

	//event handlers

	handleSubmit(e) {
		e.preventDefault();
		const newResource = {
			title: this.state.title,
			url: this.state.url,
		}
		this.props.addResource(this.props.index, newResource)
	}

	handleClick() {
		this.setState(prevState => ({
			isClicked: !prevState.isClicked
		}));
	}

	handleTyping(e) {
		this.setState({[e.target.name]: e.target.value})
	}



	render() {
		return(
			<div className="container">
				<div className="row">
						<div className="col-xs-4 well well-red">
		  				<h3 onClick={this.handleClick}>{this.props.items.subject}</h3>
						</div>
					<div className="col-xs-8">
			  		<ul>
			  			{this.props.items.resources.map((resource) => {
			  				if (this.state.isClicked) {
				  				return(
				  					<li>
				  						<a href={resource.url} className="no-decoration">{resource.title}</a>
				  					</li>
				  				)
			  				}
			  			}
			  			)}
			  		</ul>
			  		<form>
			  			<label htmlFor="title">
			  				Title&nbsp;
				  			<input name="title" id="title" onChange={this.handleTyping} value={this.state.title}  />
				  		</label>
				  		<br/>
				  		<label htmlFor="url">
			  				URL&nbsp;
				  			<input name="url" id="url" onChange={this.handleTyping} value={this.state.url}  />
				  		</label>
				  		<br/>
				  		<button onClick={this.handleSubmit}>Add Resource</button>
			  		</form>
			  	</div>
			  </div>
	  	</div>
		)
	}
}