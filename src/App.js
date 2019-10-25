// @flow

import * as React from 'react';
import './App.css';
import Button from './components/button/Button';

function App(): React.Node {
  return (
    <div className="App">
      <header className="App-header">
        <Button label={"click me please"}/>
      </header>
    </div>
  );
}

export default App;
