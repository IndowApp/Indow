import React, { Component } from 'react';
import './onboarding.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../../pages/home/home';
import arrow from '../../images/right-arrow-circular-button.svg'
import piggyBank from '../../images/fist_full_of_coins.jpg'

class OnboardingThree extends Component {
    render () {
        return (
            <div className="onboarding onboardingThree">
            <h1>Invest Smart</h1>
            <img src={piggyBank} className="onboardingImage3" alt="organizing finances illustration" />
            <p>Indow cater investing to your needs, whether your goal is to pay for student debt, or save for retirement.</p>
            {/* <p>Indow suggests investments based on your preferences, so that you will grow your capital in a meaningful way</p> */}
                    <div>
                    {/* <Route path="/" component={Home} /> */}
                    <Link to="/"><img src={arrow} className="onboardingArrow" alt="next page" /></Link>
                    </div>
                <div class="iconCredit">Icons made by <a href="https://www.flaticon.com/authors/rami-mcmin" title="Rami McMin">Rami McMin</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 	title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
        );
    }
}
export default OnboardingThree;