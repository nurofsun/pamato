import {
    ADD_TASK,
    REMOVE_TASK,
    WATCH_TASK_INPUT,
    TOGGLE_TASK,
    FILTER_TASK
} from './actionTypes.js'

export const addTask = text => {
    return {
        type: ADD_TASK,
        text
    }
}

export const removeTask = id => {
    return {
        type: REMOVE_TASK,
        id
    }
}

export const toggleTask = id => {
    return {
        type: TOGGLE_TASK,
        id
    }
}

export const watchTaskInput = value => {
    return {
        type: WATCH_TASK_INPUT,
        value
    }
}

export const setFilterTask = filter => {
    return {
        type: FILTER_TASK,
        filter
    }
}
