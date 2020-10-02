import { addTask, watchTaskInput } from '../actions/actionCreators.js';

export const mapStateToProps = state => {
    return {
        ...state
    }
}

export const mapDispatchProps = dispatch => {
    return {
        addTask: text => dispatch(addTask(text)),
        watchTaskInput: value => dispatch(watchTaskInput(value))
    }
}
