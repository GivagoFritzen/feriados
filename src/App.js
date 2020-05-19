import React from 'react';
import './App.css';
import { Resume, Detail } from './components/';

function App() {
  return (
    <div>
      <header>
        <Resume></Resume>
        <Detail></Detail>
      </header>
    </div>
  );
}

export default App;
