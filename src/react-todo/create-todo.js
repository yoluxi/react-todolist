import React from 'react';
import _ from 'lodash';
export default class CreateTodo extends React.Component {
    constructor(){
        super();
        this.state = {
            error: null
        }
    }

    renderErrorSection(error){
        if(this.state.error) {
            return (
                <div style={{color: 'red'}}>{this.state.error}</div>
            )
        }

        return null;
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="what do I need to do?" ref="inputBox"/>
                <button>Create</button>
                {this.renderErrorSection()}
            </form>
        )
    }

    handleCreate(event) {
        event.preventDefault();
        const inputBox = this.refs.inputBox;
        const task = inputBox.value;
        const validateInput = this.validateInput(task)
        if(validateInput) {
            this.setState({
                error: validateInput
            })
            return;
        }
        this.setState({
            error: null
        })
        this.props.createTask(task);;
        inputBox.value = '';
    }

    validateInput(task) {
        if (!task) {
           return "please enter task";
        } else if (_.find(this.props.todos, todo=>todo.task === task)) {
            return 'task is already exist'
        } else {
            return null
        }
    }
}