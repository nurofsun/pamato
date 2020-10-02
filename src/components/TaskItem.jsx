import * as React from 'react';

function TaskItem(props) {
    return(
        <li className="TaskItem" 
            onClick={props.onTaskItemClick} 
            style={{ textDecoration: props.complete ? 'line-through' : '' }}>
            {props.text}
            <button onClick={props.onTaskItemButtonClick}>&times;</button>
        </li>
    )
}

export default TaskItem;
