import React, { Component } from 'react';
import './survey.css';
import InterestArea from '../../components/survey-interestArea/InterestArea';

class Survey extends Component {
    render () {
        return (
            <div className="surveyWrapper">
               <InterestArea />
            </div>
        );
    }
}
export default Survey;