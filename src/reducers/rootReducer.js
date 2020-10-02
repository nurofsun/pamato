import { tasks, newTask } from './taskReducer.js';
import { combineReducers } from 'redux';
export default combineReducers({ tasks, newTask })
