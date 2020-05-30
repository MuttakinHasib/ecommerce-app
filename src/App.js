import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
