import React, { Component } from 'react';
import './onboarding.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../../App';

class OnboardingThree extends Component {
    render () {
        return (
            <div className="onboarding onboardingThree">
            <h1>Invest Smart</h1>
            <p>Indow suggest investments based on your preferences, so that you will grow your capital in a meaningful way</p>
            </div>
        );
    }
}
export default OnboardingThree;