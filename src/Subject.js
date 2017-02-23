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
						<div className="col-xs-3">
		  				<p onClick={this.handleClick}>{this.props.items.subject}</p>
						</div>
					<div className="col-xs-9">
			  		<ul className="list-unstyled">
			  			{this.props.items.resources.map((resource) => {
			  				if (this.state.isClicked) {
				  				return(
				  					<li >
				  						<a href={resource.url} >{resource.title}</a>
				  					</li>
				  				)
			  				}
			  			}
			  			)}
			  		</ul>
			  		<form>
				  		<input name="title" id="title" onChange={this.handleTyping} value={this.state.title} placeholder="title"/>
				  		<br/>
				  		<input name="url" id="url" onChange={this.handleTyping} value={this.state.url} placeholder="url" />
				  		<br/>
				  		<button onClick={this.handleSubmit}>Add Resource</button>
			  		</form>
			  	</div>
			  </div>
	  	</div>
		)
	}
}