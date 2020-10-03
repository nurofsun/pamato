import React from 'react';
import './App.css';
import PamatoHeader from './components/PamatoHeader.jsx';
import PamatoDate from './components/PamatoDate.jsx';
import PamatoMain from './components/PamatoMain.jsx';
import PamatoFooter from './components/PamatoFooter.jsx';
import TaskList from './components/TaskList.jsx';
import TaskInput from './components/TaskInput.jsx';
import TaskTab from './components/TaskTab.jsx';

function App() {
  return (
    <div className="App">
        <PamatoHeader>
            <PamatoDate/>
        </PamatoHeader>
        <PamatoMain>
            <TaskTab></TaskTab>
            <TaskList/>
        </PamatoMain>
        <PamatoFooter>
            <TaskInput/>
        </PamatoFooter>
    </div>
  );
}

export default App;
