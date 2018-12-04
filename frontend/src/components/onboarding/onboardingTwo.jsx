import React, { Component } from 'react';
import './onboarding.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import onboardingThree from './onboardingThree';
import expensesAnalytics from '../../images/expense_analytics.jpg'
import arrow from '../../images/right-arrow-circular-button.svg'

class OnboardingTwo extends Component {
    render () {
        return (
            <div className="onboarding onboardingTwo">
                <h1>Know where you spend</h1>
                <img src={expensesAnalytics} className="onboardingImage2" alt="organizing finances illustration" />
                <p>We break down your expenses to make it easy for you to decide where to cut back</p>
                <Router>
                    <div>
                    <Route path="/onboarding-3" component={onboardingThree} />
                    <Link to="/onboarding-3"><img src={arrow} className="onboardingArrow" alt="next page" /></Link>
                    </div>
                </Router>
                <div class="iconCredit">Icons made by <a href="https://www.flaticon.com/authors/rami-mcmin" title="Rami McMin">Rami McMin</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
        );
    }
}
export default OnboardingTwo;