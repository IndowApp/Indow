/* This is the goals chart that appears in the front page of the application*/

import React, { Component } from 'react';
import '../../index.css';
import './goals.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {name: 'November 2018', pv: 150},
    {name: 'Drinks & Food', pv: 160},
    {name: 'Groceries', pv: 250},
    {name: 'Transportation', pv: 350},
    {name: 'Invested', pv: 450},
    
];
class Goals extends Component {
	render () {
  	return (
        <div className="goals">
          <h3>Your Goals</h3>
    	    <BarChart width={650} height={300} data={data} margin={{top: 5, right: 30, left: 50, bottom: 5}} layout="vertical" className="goalsChart">
            <CartesianGrid />
            <XAxis tick={{ fill: '#282c34' }} />
            <YAxis dataKey="name" type="category" tick={{ fill: '#282c34' }}/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="pv" fill="#62d2a2" background={{ fill: 'white' }} />
          </BarChart>
        </div>
    );
  }
}

export default Goals;

