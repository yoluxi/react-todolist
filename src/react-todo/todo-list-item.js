import React from 'react';

export default class TodoListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            isEditing: false
        }
    }
    
    editClick() {
        this.setState({
            isEditing : true
        })
    }

    cancelClick() {
         this.setState({
            isEditing : false
         })
    }

    saveTask(event) {
        event.preventDefault();
        var newValue = this.refs.editBox.value;
        this.props.editTask(this.props.task,newValue);
        this.setState({
            isEditing: false
        })
    }
    renderTaskSection() {
        const {task, isCompleted} = this.props;
        const style = {
            color: isCompleted ? "green" : "red"
        }
        if(this.state.isEditing){
            return (
                <td>
                    <form onSubmit={this.saveTask.bind(this)}>
                        <input type="text" placeholder="" defaultValue={this.props.task} ref="editBox"/>
                    </form>
                </td>
            )
        }else{
            return (
                <td style={style} onClick={this.props.toggleTask.bind(this,task)}>{task}</td>
            )
        }
    }


    renderActionSection() {
        if (this.state.isEditing) {
           return (
            <td>
                <button onClick={this.saveTask.bind(this)}>save</button>
                <button onClick={this.cancelClick.bind(this)}>cancel</button>
            </td>
           )
        } else {
            return (
            <td>
                <button onClick={this.editClick.bind(this)}>edit</button>
                <button onClick={this.props.deleteTask.bind(this,this.props.task)}>delete</button>
            </td>
            )
        }
    }
    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        )
    }

}