import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitNewIdea = (event) => {
        event.preventDefault();

        const newIdea = { ...this.state, id: Date.now() };
        this.props.addIdea(newIdea);
        this.resestInputs();
    }

    resestInputs = () => {
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    name="title"
                    onChange={event => this.handleChange(event)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={this.state.description}
                    name="description"
                    onChange={event => this.handleChange(event)}
                />
                <button onClick={event => this.submitNewIdea(event)}>Submit!</button>
            </form>
        )
    }
}

export default Form;