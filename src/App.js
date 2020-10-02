import React from 'react';
import './App.css';
import TaskList from './components/TaskList.jsx';
import TaskInput from './components/TaskInput.jsx';

function App() {
  return (
    <div className="App">
        <TaskInput/>
        <TaskList/>
    </div>
  );
}

export default App;
