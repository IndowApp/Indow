import React, { Component } from 'react';
import './side-bar.css';
import icon from "../../images/dollar.svg" 

class SideBar extends Component {
    render () {
        return (
            <div className="sidebar">
                <button><h3>Checking Account</h3><p>$500</p></button>
                <button><h3>Savings Account</h3><p>$1,500</p></button>
                <button><h3>Credit Card</h3><p>$200</p></button>
            </div>
        );
    }
        
}
export default SideBar;