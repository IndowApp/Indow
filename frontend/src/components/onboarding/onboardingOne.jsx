import React, { Component } from 'react';
import './onboarding.css';
import '../../index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OnboardingTwo from './onboardingTwo';
import organizingFinances from '../../images/organizing_finances.jpg'
import arrow from '../../images/right-arrow-circular-button.svg'
class Onboarding extends Component {
    render () {
        return (
            <div className="onboarding onboardingOne">
                <h1>Welcome, Sasha!</h1>
                <img src={organizingFinances} className="onboardingImage1" alt="organizing finances illustration" />
                <p>Indow is here to help you grow capital and organize your financial life</p>
                <Router>
                    <div>
                        <Route exact path="/onboarding-2" component={OnboardingTwo} />
                        <Link to="/onboarding-2"><img src={arrow} className="onboardingArrow" alt="next page" /></Link>
                    </div>
                </Router>
                <div class="iconCredit">Icons made by <a href="https://www.flaticon.com/authors/rami-mcmin" title="Rami McMin">Rami McMin</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
            
        );
    }
}

export default Onboarding;
