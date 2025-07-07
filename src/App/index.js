import React from 'react';
import { AppUI } from './AppUI.js';
import './App.css';
import { TaskProvider } from '../TaskContext/index.js';

function App() {
  return (
    <TaskProvider>
      <AppUI/>
    </TaskProvider>
  );
}

export default App;