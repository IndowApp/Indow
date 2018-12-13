/* This is the goals chart that appears in the front page of the application*/

import React, { Component } from 'react';
import '../../index.css';
import './goals.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {name: 'December 2018', pv: 350},
    {name: 'Drinks & Food', pv: 610},
    {name: 'Groceries', pv: 250},
    {name: 'Transportation', pv: 150},
    {name: 'Invested', pv: 50},
    
];
class Goals extends Component {
	render () {
  	return (
        <div className="goals">
          <h3>Your Goals</h3>
    	    <BarChart width={700} height={300} data={data} layout="vertical"
            margin={{top: 5, right: 30, left: 55, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis type="number"/>
       <YAxis type="category" dataKey="name"/>
       <Legend />
       <Bar dataKey="pv" fill="#62D2A2" background={{ fill: '#eee' }} />
      </BarChart>
        </div>
    );
  }
}

export default Goals;

