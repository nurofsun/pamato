import * as React from 'react';
import { connect } from 'react-redux';
import { setFilterTask } from '../actions/actionCreators.js';

function PamatoTaskTab(props) {
    const handleClick = (type) => {
        props.setFilterTask(type)
    }

    let tasksAllCount, tasksInActiveCount, tasksActiveCount;
    tasksAllCount = props.tasks.length;

    let tasksInActive = props.tasks.filter( task => task.complete === true )
    tasksInActiveCount = tasksInActive.length;

    let tasksActive = props.tasks.filter( task => task.complete === false );
    tasksActiveCount = tasksActive.length;
    return(
        <nav className="PamatoTaskTab">
            <button 
                className={ props.filterTask === 'SHOW_ALL_TASK' ? 'PamatoTaskTabItem active' : 'PamatoTaskTabItem' } 
                onClick={() => handleClick('SHOW_ALL_TASK')}>
                <span className="label">All</span>
                <span className="count">{tasksAllCount}</span>
            </button>
            <button 
                className={ props.filterTask === 'SHOW_INACTIVE_TASK' ? 'PamatoTaskTabItem active' : 'PamatoTaskTabItem' } 
                onClick={() => handleClick('SHOW_INACTIVE_TASK')}>
                <span className="label">InActive</span>
                <span className="count">{tasksInActiveCount}</span>
            </button>
            <button 
                className={ props.filterTask === 'SHOW_ACTIVE_TASK' ? 'PamatoTaskTabItem active' : 'PamatoTaskTabItem' } 
                onClick={() => handleClick('SHOW_ACTIVE_TASK')}>
                <span className="label">Active</span>
                <span className="count">{tasksActiveCount}</span>
            </button>
        </nav>
    )
}
const mapStateToProps = state => {
    return {
        ...state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setFilterTask: filter => dispatch(setFilterTask(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PamatoTaskTab);
