import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../containers/TaskListContainer.js';
import TaskItem from './TaskItem.jsx';

function TaskList(props) {
    const handleClick = (id) => {
       props.completeTask(id) 
    }
    const handleDeleteClick = id => {
        props.removeTask(id)
    }
    return(
        <ul className="TaskList">
            {
                props.tasks &&
                props.tasks.map( task => (
                    <TaskItem 
                        text={task.text} 
                        key={task.id} 
                        onTaskItemClick={(id) => handleClick(task.id) } 
                        onTaskItemButtonClick={(id) => handleDeleteClick(task.id) }
                        complete={task.complete}></TaskItem>
                ))
            }
        </ul>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
