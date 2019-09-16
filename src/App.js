import React from 'react';
import Button from './Button';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text='Hello button' />
        <Users />
      </header>
    </div>
  );
}

export default App;
