import React, { Component } from 'react';
import './side-bar.css';
import icon from "../../images/dollar.svg" 

class SideBar extends Component {
    render () {
        return (
            <div className="sidebar">
                {/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                <div className="logo">
                    <img src={icon} align="left"/>
                    <h1 className="logo-text">INDOW</h1>
                </div>
                <button><h3>Checking Account</h3><p>$500</p></button>
                <button><h3>Savings Account</h3><p>$1,500</p></button>
                <button><h3>Credit Card</h3><p>$200</p></button>
            </div>
        );
    }
        
}
export default SideBar;