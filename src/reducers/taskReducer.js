import {
    ADD_TASK,
    REMOVE_TASK,
    COMPLETE_TASK,
    WATCH_TASK_INPUT,
    FILTER_TASK,
} from '../actions/actionTypes.js';

let nextTaskId = 1;

export function tasks(state=[],action) {
    switch(action.type) {
        case ADD_TASK:
            return [
                ...state,
                { id: nextTaskId++, text: action.text, complete: false }
            ]
        case REMOVE_TASK:
            return state.filter( task => task.id !== action.id )
        case COMPLETE_TASK: 
            return state.map( task => {
                if (task.id === action.id) {
                    task.complete = true
                }
                return task
            })
        default:
            return state
    }
}

export function newTask(state='', action) {
    switch(action.type) {
        case WATCH_TASK_INPUT:
            return state = action.value
        default: 
            return state
    }
}

export function filterTask(state='SHOW_ALL_TASK', action) {
    switch(action.type) {
        case FILTER_TASK:
            return action.filter
        default:
            return state
    }
}
