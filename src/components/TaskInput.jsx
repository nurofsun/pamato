import * as React from 'react';
import { mapStateToProps, mapDispatchProps } from '../containers/TaskInputContainer.js';
import { connect } from 'react-redux';

function TaskInput(props) {
    const handleSubmit = event => {
        event.preventDefault()
        props.addTask(props.newTask)
        props.watchTaskInput('')
    }
    const handleChange = event => {
        props.watchTaskInput(event.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={props.newTask} onChange={handleChange} />
        </form>
    )
}

export default connect(mapStateToProps,mapDispatchProps)(TaskInput)
