import React, { Component } from 'react';
import './RiskLevel.css';
import { Slider, Icon } from 'antd';
import "antd/dist/antd.css";

class RiskLevel extends Component {
    state = {
        value: 0,
      }
    
      handleChange = (value) => {
        this.setState({ value });
      }

    render () { 
        const { max, min } = this.props;
        const { value } = this.state;
        const mid = ((max - min) / 2).toFixed(5);
        const preColor = value >= mid ? '' : 'yellow';
        const nextColor = value >= mid ? '' : 'red';
        return (
            <div className="riskLevel-wrapper">
            <h2>Risk Level</h2>
            <p>From conservative to high risk taker, where would you place yourself in the risk scale?</p>
            <div className="icon-wrapper">
        <Icon style={{ color: preColor }} type="safety" />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <Icon style={{ color: nextColor }} type="fire" />
      </div>
            </div>
        );
    }
}
export default RiskLevel;