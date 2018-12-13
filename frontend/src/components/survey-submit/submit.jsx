import React, { Component } from 'react';
import './submit.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Submit extends Component {
    render(){
        return(
            <Link to="/" className="survey-link">
                <button className="survey-submit">
                    Take Me Home!
                </button>
            </Link>
        )
    }
}

export default Submit; 