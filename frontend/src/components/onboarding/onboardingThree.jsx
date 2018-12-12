import React, { Component } from 'react';
import './onboarding.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from '../../pages/home/home';
import arrow from '../../images/right-arrow-circular-button.svg'
import piggyBank from '../../images/fist_full_of_coins.jpg'

class OnboardingThree extends Component {
    render () {
        return (
            <div className="onboarding onboardingThree">
            <h1>Invest Smart</h1>
            <img src={piggyBank} className="onboardingImage3" alt="organizing finances illustration" />
            <p>Indow cater investing to your needs, whether your goal is to pay for student debt, or save for retirement.</p>
                    <div>
                    <Link to="/survey"><img src={arrow} className="onboardingArrow" alt="next page" /></Link>
                    </div>
            </div>
        );
    }
}
export default OnboardingThree;