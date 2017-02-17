// 容器组件  将展示组件链接到redux 
// 根据当前显示的状态来对todo列表进行过滤 并渲染Todolist 
// 容器组件 就是使用store.subscribe() 从Redux state中读取数据  并通过Props来传递数据 
// 建议使用connect() 方法 
import { connect } from 'react-redux';
import { toggleTodo } from './actions';
import TodoList from './todolist';
const getVisbleTodos = (todos, filter) => {
    switch(filter) {
        case "SHOW_ALL": 
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed)        
    }
}


// 读取state 
const mapStateToProps = (state) => {
    return {
        todos: getVisbleTodos(state.todos, state.visibilityFilter)
    }
}


// 分发action 
// 定义mapDispatchToProps() 方法接收 dispatch()方法并返回期望注入到展示组件中的props中的回调方法  
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}


const visibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);


export default visibleTodoList;