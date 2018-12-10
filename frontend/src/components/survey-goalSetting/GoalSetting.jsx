import React, { Component } from 'react';
import './GoalSetting.css';
import { Slider, InputNumber, Row, Col, } from 'antd';
import DinnerDrinks from './DinnerDrinks-slider';
import Entertainement from './Entertainement';
import Transportation from './Trasportation';
import Shopping from './Shopping';

class GoalSetting extends Component { 
    state = {
        inputValue: 1,
      }
    
      onChange = (value) => {
        this.setState({
          inputValue: value,
        });
      }
    render () { 
        const { inputValue } = this.state;
        return(
            <div className="goalSetting-wrapper">
                <h1>Goal Setting</h1>
                <h3>Let's set some budgeting goals to get you started</h3>
                <h3>How much do you think you can save over the next month in the categories below?</h3>
                <p>You can add more categories and change these afterwords</p>
                <Row>
                    <h4>Dinner and Drinks</h4>
                    <DinnerDrinks />
                </Row>
                <Row>
                    <h4>Entertainement <small>Movies/Shows/Etc</small></h4>
                    <Entertainement />
                </Row>
                <Row>
                    <h4>Transportation <small>Cabs and other superfluous rides</small></h4>
                    <Transportation />
                </Row>
                <Row>
                    <h4>Shopping <small>Clothing/Tech Gadgets/Anything you want but can live without</small></h4>
                    <Shopping />
                </Row>
            </div>
        );
    }
}
export default GoalSetting;