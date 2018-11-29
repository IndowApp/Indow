// a test component to display transaction data on the front end

import React, { Component } from 'react';
import './transaction.css';

class Transaction extends Component {
    constructor(props){
        super(props); 
        this.state = {
            data : '',
        }
    }
    componentDidMount() {
      fetch('/plaid/transactions')
        .then(response => response.json())
        .then(body => console.log('Is there a body? ', (body!=null)));
    }

    getTransactionData = () => {
        axios.get('/plaid').then(res => {
            let transactions = res.data; 
            this.setState({data : transactions}); 
        });
    }
  
    render() {
      return (
        <div>
            {this.state.data}
        </div>
      );
    }
  }
  
  export default Transaction;