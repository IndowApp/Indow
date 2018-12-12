import React, { Component } from 'react';
import './survey.css';
import InterestArea from '../../components/survey-interestArea/InterestArea';
import RiskLevel from '../../components/survey-riskLevel/RiskLevel';
import GoalSetting from '../../components/survey-goalSetting/GoalSetting'

class Survey extends Component {
    render () {
        return (
            <div className="surveyWrapper">
                <div className="surveyMessage">
                    <h1>Let's get started</h1>
                    <h2>Tell us a bit more about your financial interests and your investing goals</h2>
                </div>
                <div><InterestArea /></div>
                <br/>
                <div><RiskLevel /></div>
                <br />
                <div><GoalSetting /></div>
            </div>
        );
    }
}
export default Survey;