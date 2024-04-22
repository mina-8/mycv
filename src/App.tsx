import React from 'react';
import './App.css';
import Lookcode from './Componnets/Lookcode';
import Description from './Componnets/Description';
import Contactme from './Componnets/Contactme';

function App() {
  return (
    <>
    <div className='App'>
      <header className='App-header'>
        <Description />
        <Contactme />
        <Lookcode />
      </header>
    </div>
    </>
  );
}

export default App;
