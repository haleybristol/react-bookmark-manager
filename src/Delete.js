import React, { Component } from 'react';

export default class Delete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "This is a title",
            url: "www.google.com",
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeResource(this.props.index);
    }

    render() {
        const url = this.props.url;
        const title = this.props.title;
        return(
                <li>
                    <a href={url}>{title}</a>
                    <button onClick={this.handleDelete}>X</button>
                </li>

            )

    }
}


