import * as React from 'react';

function TaskItem(props) {
    return(
        <li className="TaskItem" 
            onClick={props.onTaskItemClick}>
            <div>
                <span className={ props.complete ? "indicator is-inactive" : "indicator is-active" }></span>
                <span className="text">{props.text}</span>
            </div>
            <button onClick={props.onTaskItemButtonClick}>&times;</button>
        </li>
    )
}

export default TaskItem;
