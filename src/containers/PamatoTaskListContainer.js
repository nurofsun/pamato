import { completeTask, removeTask } from '../actions/actionCreators.js';

export const mapStateToProps = state => {
    return {
        ...state
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        completeTask: id => dispatch(completeTask(id)),
        removeTask: id => dispatch(removeTask(id))
    }
}
