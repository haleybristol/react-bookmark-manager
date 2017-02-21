import React, { Component } from 'react';

export default class AddNewSubject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subject: '',
        }

        this.handleTyping = this.handleTyping.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    //event handlers
    handleTyping(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick(e) {
        e.preventDefault();

        this.props.addSubject(this.state.subject);

    }

    render() {
        return(
            <div className="container">
              <form>
                <label htmlFor="subject"></label>
                <input name="subject" id="subject" onChange={this.handleTyping} value={this.state.subject}/>
                <button onClick={this.handleClick}>Add Subject</button>
              </form>
            </div>
        )
    }
}