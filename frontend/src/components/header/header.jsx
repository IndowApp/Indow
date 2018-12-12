import React, { Component } from 'react';
import './header.css';
import icon from "../../images/dollar.svg" 

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="logo">
                    <img src={icon} align="left"/>
                    <h1 className="logo-text">INDOW</h1>
                    <p>Food for Capital</p>
                </div>
            </div>
        );
    }
        
}
export default Header;