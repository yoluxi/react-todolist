import  React from 'react';
import _ from 'lodash';
import  TodoListHead from './todo-list-head';
import  TodoListItem from './todo-list-item';
export default class TodoList extends React.Component {
    renderItems() {
        return _.map(this.props.todos, (todo, index) => 
            <TodoListItem key={index} {...todo} {...this.props}/>)
    }    
    render() {
        return (
            <table>
               <TodoListHead/>
               <tbody>
                    {this.renderItems()}
               </tbody>
            </table>
        )
    }
}