import * as React from 'react';

function PamatoTaskItem(props) {
    return(
        <li className="PamatoTaskItem" 
            onClick={props.onTaskItemClick}>
            <span className={ props.complete ? "indicator is-inactive" : "indicator is-active" }></span>
            <div>
                <span className="text">{props.text}</span>
            </div>
            <button onClick={props.onTaskItemButtonClick}>&times;</button>
        </li>
    )
}

export default PamatoTaskItem;
