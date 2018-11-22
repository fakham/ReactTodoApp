import React, {Component} from 'react';
import {Input, Button} from '@material-ui/core';
import './AddItem.css'

class AddItem extends Component {

    state = {
        name: '',
        priority: 5
    }

    handleChange = e => {

        this.setState({
            [e.target.id] : e.target.value
        })

    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addItem(this.state);

        this.setState({
            name: '',
            priority: 5
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <Input type="text" id="name" placeholder="Enter a ToDo.." onChange={this.handleChange}  value={this.state.name} className="input" />
                <Input type="number" id="priority" placeholder="Enter a Priority.." onChange={this.handleChange} value={this.state.priority} className="input"  />
                <Button type="submit" variant="outlined" color="primary">Add</Button>
            </form>
        )
    }

}

export default AddItem;