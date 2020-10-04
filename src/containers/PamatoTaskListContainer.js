import { toggleTask, removeTask } from '../actions/actionCreators.js';

export const mapStateToProps = state => {
    return {
        ...state
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        toggleTask: id => dispatch(toggleTask(id)),
        removeTask: id => dispatch(removeTask(id))
    }
}
