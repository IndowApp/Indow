import React, { Component } from 'react';
import './onboarding.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OnboardingTwo from './onboardingTwo';

class Onboarding extends Component {
    render () {
        return (
            <div className="onboarding onboardingOne">
                <h1>Welcome user</h1>
                <p>Indow is here to help you grow capital and organize your financial life</p>
                <Router>
                    <div>
                        <Route path="/spend" component={OnboardingTwo} />
                        <Link to="/spend">Users</Link>
                    </div>
                </Router>
            </div>
            
        );
    }
}

export default Onboarding;