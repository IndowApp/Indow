import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Goals from './components/goals-chart/goals-chart';
import SideBar from './components/side-bar/side-bar';
import MarketMover from './components/market-mover/market-mover';
//import Sidebar from "react-sidebar";

class App extends Component {
  // the code that is commented out is for the collapsible side bar we can use when we work on making the app responsive

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sidebarOpen: true
  //   };
  //   this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  // }
  // onSetSidebarOpen(open) {
  //   this.setState({ sidebarOpen: open });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
        </Sidebar> */}
          <SideBar />
          <div className="mainBody">
            <Goals />
            <MarketMover />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
