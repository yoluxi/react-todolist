import { combineReducers } from 'redux'; 
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;


function VisibilityFilters(state=SHOW_ALL, action) {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
             
            
    }
}