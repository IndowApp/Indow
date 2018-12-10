import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col, } from 'antd';

class DinnerDrinks extends Component { 
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
            <div>
            <Col span={12}>
                <Slider min={1} max={200} onChange={this.onChange} value={typeof inputValue === 'number' ? inputValue : 0} />
            </Col>
            <Col span={4}>
                <InputNumber min={1} max={200} style={{ marginLeft: 16 }} value={inputValue} onChange={this.onChange} />
            </Col>
            </div>
        );
    }
}
export default DinnerDrinks;