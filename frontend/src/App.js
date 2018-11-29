import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/expenses-chart';

import Transaction from './components/transaction-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Expenses />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>

        <Transaction/>
      </div>
    );
  }
}

export default App;
