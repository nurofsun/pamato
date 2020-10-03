import * as React from 'react';
import { connect } from 'react-redux';
import { setFilterTask } from '../actions/actionCreators.js';

function PamatoTaskTab(props) {
    const handleClick = (type) => {
        props.setFilterTask(type)
    }
    return(
        <nav className="PamatoTaskTab">
            <button 
                className={ props.filterTask === 'SHOW_ALL_TASK' ? 'PamatoTaskTabItem active' : 'PamatoTaskTabItem' } 
                onClick={() => handleClick('SHOW_ALL_TASK')}>
                All
            </button>
            <button 
                className={ props.filterTask === 'SHOW_INACTIVE_TASK' ? 'PamatoTaskTabItem active' : 'PamatoTaskTabItem' } 
                onClick={() => handleClick('SHOW_INACTIVE_TASK')}>
                InActive
            </button>
            <button 
                className={ props.filterTask === 'SHOW_ACTIVE_TASK' ? 'PamatoTaskTabItem active' : 'PamatoTaskTabItem' } 
                onClick={() => handleClick('SHOW_ACTIVE_TASK')}>
                Active
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
