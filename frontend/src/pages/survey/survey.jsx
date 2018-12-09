import React, { Component } from 'react';
import './survey.css';
import InterestArea from '../../components/survey-interestArea/InterestArea';
import RiskLevel from '../../components/survey-riskLevel/RiskLevel'

class Survey extends Component {
    render () {
        return (
            <div className="surveyWrapper">
            <link href="https://fonts.googleapis.com/css?family=Mukta:300,600" rel="stylesheet" />
               <InterestArea />
               <RiskLevel />
            </div>
        );
    }
}
export default Survey;