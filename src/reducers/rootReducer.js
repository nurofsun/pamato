import { tasks, newTask, filterTask } from './taskReducer.js';
import { combineReducers } from 'redux';
export default combineReducers({ tasks, newTask, filterTask })
