/* This is the goals chart that appears in the front page of the application*/

import React, { Component } from 'react';
import '../../index.css';
import './goals.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {name: 'November 2018', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Drinks & Food', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Groceries', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Transportation', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Invested', uv: 1890, pv: 4800, amt: 2181},
];
class Goals extends Component {
	render () {
  	return (
        <div className="goals">
          <h3>Your Goals</h3>
    	    <BarChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}} layout="vertical" className="goalsChart">
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis />
            <YAxis dataKey="name" type="category"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </div>
    );
  }
}

export default Goals;

