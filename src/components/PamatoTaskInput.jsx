import * as React from 'react';
import { mapStateToProps, mapDispatchProps } from '../containers/PamatoTaskInputContainer.js';
import { connect } from 'react-redux';

function PamatoTaskInput(props) {
    const handleSubmit = event => {
        event.preventDefault()
        props.addTask(props.newTask)
        props.watchTaskInput('')
    }
    const handleChange = event => {
        props.watchTaskInput(event.target.value)
    }
    return(
        <div className="PamatoTaskInput">
            <form onSubmit={handleSubmit}>
                <input className="TaskInput" placeholder="What's your plan today?" type="text" value={props.newTask} onChange={handleChange} />
            </form>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchProps)(PamatoTaskInput)
