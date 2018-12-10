import React, { Component } from 'react';
import './home.css';
import Goals from '../../components/goals-chart/goals-chart';
import SideBar from '../../components/side-bar/side-bar';
import MarketMover from '../../components/market-mover/market-mover';
//import Sidebar from "react-sidebar"; -> for responsive sidebar

class Home extends Component {
    render () {
        return (
            <div className="home">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="mainbody">
                    <Goals />
                    <MarketMover /> 
                </div>
            </div>
        );
    }
}
export default Home;

// once ready to make responsive use this code for the sidebar
//replace this code for SideBar inside the return call
 
/* <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
        </Sidebar> */

//place this code just below the class header

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