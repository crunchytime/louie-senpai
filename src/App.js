import React from 'react';

import Report from './components/Report';
import Intro from './components/intro/Intro';
import Aca from './components/aca/Aca';
import Extra from './components/extra/Extra';
import Free from './components/free/Free';

import './styles/App.scss';

function App() {
  return (
    <div className="app-container">
     <h1 className="big-bold-text">Louie Senpai</h1>
     <Intro/>

     <Aca/>

     <Extra/>

     <Free/>

     <Report/>
     
    </div>
  );
}

export default App;
