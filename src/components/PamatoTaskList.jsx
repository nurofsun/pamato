import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../containers/PamatoTaskListContainer.js';
import PamatoTaskItem from './PamatoTaskItem.jsx';

function PamatoTaskList(props) {
    const handleClick = (id) => {
       props.toggleTask(id) 
    }
    const handleDeleteClick = id => {
        props.removeTask(id)
    }
    let taskItems;
    if (props.tasks.length !== 0) {
        if (props.filterTask === 'SHOW_ALL_TASK') {
            taskItems = props.tasks.map( task => (
                            <PamatoTaskItem 
                                text={task.text} 
                                key={task.id} 
                                onTaskItemClick={(id) => handleClick(task.id) } 
                                onTaskItemButtonClick={(id) => handleDeleteClick(task.id) }
                                complete={task.complete}/>
                        ));
        }
        if (props.filterTask === 'SHOW_ACTIVE_TASK') {
            let tasks = props.tasks.filter( task => task.complete === false );
            taskItems = tasks.map( task => (
                <PamatoTaskItem 
                    text={task.text} 
                    key={task.id} 
                    onTaskItemClick={(id) => handleClick(task.id) } 
                    onTaskItemButtonClick={(id) => handleDeleteClick(task.id) }
                    complete={task.complete}/>
            ))
        }
        if (props.filterTask === 'SHOW_INACTIVE_TASK') {
            let tasks = props.tasks.filter( task => task.complete === true )
            taskItems = tasks.map( task => (
                <PamatoTaskItem 
                    text={task.text} 
                    key={task.id} 
                    onTaskItemClick={(id) => handleClick(task.id) } 
                    onTaskItemButtonClick={(id) => handleDeleteClick(task.id) }
                    complete={task.complete}/>
            ))
        }
    } else {
        taskItems = <li className="Message">
                <p>No Tasks.</p>
            </li>
    }
    return(
        <ul className="PamatoTaskList">
            {taskItems}
        </ul>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PamatoTaskList);
