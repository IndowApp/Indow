import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goals from './components/goals-chart/goals-chart';
import SideBar from './components/side-bar/side-bar';
import MarketMover from './components/market-mover/market-mover';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SideBar />
          <Goals />
          <MarketMover />
        </header>
      </div>
    );
  }
}

export default App;
