import * as React from 'react';

function TaskTab() {
    return(
        <nav className="TaskTab">
            <button className="TaskTabItem">
                All
            </button>
            <button className="TaskTabItem">
                Completed
            </button>
            <button className="TaskTabItem">
                Active
            </button>
        </nav>
    )
}

export default TaskTab;
