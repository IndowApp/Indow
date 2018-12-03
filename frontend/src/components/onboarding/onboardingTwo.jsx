import React, { Component } from 'react';
import './onboarding.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import onboardingThree from './onboardingThree';

class OnboardingTwo extends Component {
    render () {
        return (
            <div className="onboarding onboardingTwo">
                <h1>Know where you spend</h1>
                <p>We break down your expenses to make it easy for you to decide where to cut back</p>
                    <div>
                    <Link to="/invest">Users</Link>
                    </div>
            </div>
        );
    }
}
export default OnboardingTwo;