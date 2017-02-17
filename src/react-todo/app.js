import React from 'react';
import _ from "lodash";
import CreateTodo from './create-todo';
import TodoList from './todo-list';
const todos = [
    {
        task: "clean",
        isCompleted: true   
    },
    {
        task: "hit",
        isCompleted: false
    }
];
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todos
        }
    }
    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <CreateTodo createTask={this.createTask.bind(this)} todos={this.state.todos}/>
                <TodoList todos={ this.state.todos} toggleTask={this.toggleTask.bind(this)} editTask={this.editTask.bind(this)} deleteTask={this.deletTask.bind(this)}/>
            </div>
        )
    }

    // 创建任务 
    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        })
        this.setState({
            todos: this.state.todos
        })
    }

    // 切换任务是否完成
    toggleTask(task) {
        // _find() 方法
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        console.log(foundTodo);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        console.log(this.state.todos);
        this.setState({
            todos: this.state.todos
        })
    }

    // 更换任务
    editTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({
            todos: this.state.todos
        })
    }

    // 删除任务 
    deletTask(task) {
        var task = _.remove(this.state.todos,todo => todo.task === task);
        this.setState({
            todos: this.state.todos
        });
    }


}