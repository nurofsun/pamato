import React from 'react';
import './App.css';
import PamatoHeader from './components/PamatoHeader.jsx';
import PamatoDate from './components/PamatoDate.jsx';
import PamatoMain from './components/PamatoMain.jsx';
import PamatoFooter from './components/PamatoFooter.jsx';
import PamatoTaskList from './components/PamatoTaskList.jsx';
import PamatoTaskInput from './components/PamatoTaskInput.jsx';
import PamatoTaskTab from './components/PamatoTaskTab.jsx';

function App() {
  return (
    <div className="App">
        <PamatoHeader>
            <PamatoDate/>
        </PamatoHeader>
        <PamatoMain>
            <PamatoTaskTab/>
            <PamatoTaskList/>
        </PamatoMain>
        <PamatoFooter>
            <PamatoTaskInput/>
        </PamatoFooter>
    </div>
  );
}

export default App;
