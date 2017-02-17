// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// // import { element } from './jsx/jsx.component';

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// 数字 
// import Game from './component/Game/Game'
// ReactDOM.render(
//   <Game/>,
//   document.getElementById('root')
// );


// todolist 
// import App from './react-todo/app.js';
// ReactDOM.render(<App/>, document.getElementById("root"));




// redux
// import {combineReducers, createStore } from 'redux';

// const userReducer = (state={}, action) => {
//     switch(action.type) {
//         case "CHANGE_NAME": 
//             state.name = action.payload;
//             break;
//         case "CHANGE_AGE": 
//             state.age = action.payload
//             break;    
//     }
//     return state;
// };
// const tweetsReducer = (state=[], action) => state;
// const reducer = function(state, action) {
//     if(action.type === "INC") {
//         return state+1;
//     }
//     return state;
// };
// const reducer = combineReducers({
//     user: userReducer,
//     tweets: tweetsReducer
// })
// const store = createStore(reducer);
// store.subscribe(() => {
//     console.log("store changed", store.getState())
// });
// store.dispatch({type: "CHANGE_NAME", payload: "will"});
// store.dispatch({type: "CHANGE_AGE", payload: 20});



// function visibilityFilter(state="SHOW_ALL", action) {
//     switch (action.type) {
//         case "SET_VISIBILITY_FILTER": 
//             return action.filter;
//         default: 
//             return state;    
//     }
// }

// function todos(state=[], action) {
//     switch(action.type) {
//         case "ADD_TODO": 
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ]
//        case "COMPLETED_TODO": 
//             return state.map((todo, index) => {
//                 if(index === action.index) {
//                     return Object.assign({}, todo, {
//                         completed: true
//                     })
//                 }
//                 return todo;
//             })
//        default: 
//             return state;          
//     }
// }

// import { combineReducers, createStore } from "redux";

// let reducer = combineReducers({
//     visibilityFilter, todos
// })

// let store = createStore(reducer);


import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './react-redux-todo/app'
import todoApp from './react-redux-todo/reducer'

let store = createStore(todoApp)
store.subscribe(()=>{
    console.log(store.getState())
})
let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

