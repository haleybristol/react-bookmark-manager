import React, { Component } from 'react';
// import Delete from './Delete';

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
			resources: this.props.items.resources,
			subject: this.props.items
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
		console.log(e);
		console.log(e.target);
		this.setState({[e.target.name]: e.target.value})
	}

	// const Container = styled.div`

	// `

	render() {
		return(
			<div className="container">
				<div className="row">
						<div className="col-xs-3">
		  				<button onClick={() => this.props.deleteSubject(this.props.index)}>X</button><p>{this.props.items.subject}</p>

						</div>
					<div className="col-xs-9">
			  		<ul className="list-unstyled">
			  			{this.props.items.resources.map((resource, index) => {
			  				return(
			  					<li>
                   <button onClick={() => this.props.deleteResource(this.props.index, index)}>x</button><a href={resource.url}>{resource.title}</a>
                   </li>
			  				)
			  			}
			  			)}
			  		</ul>
			  		<form>
				  		<input
				  			name="title"
				  			id="title"
				  			onChange={this.handleTyping}
				  			value={this.state.title}
				  			placeholder="Title"
				  		/>
				  		<br/>
				  		<input
				  			name="url"
				  			id="url"
				  			onChange={this.handleTyping}
				  			value={this.state.url}
				  			placeholder="URL"
				  		/>&nbsp;
				  		<button onClick={this.handleSubmit}>+</button>
			  		</form>
			  		<hr />
			  	</div>
			  </div>
	  	</div>
		)
	}
}