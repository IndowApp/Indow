// a test component to display transaction data on the front end

import React, { Component } from 'react';
import './transaction.css';
import axios from 'axios'; 

class Transaction extends Component {
    constructor(props){
        super(props); 
        this.state = {
            data : [],
            test: 'initial Data'
        }
    }
    componentDidMount() {
    const instance = axios.create({
        baseURL : 'http://localhost:8000/plaid/',
    });

    instance.post('/get_access_token')
    .catch(error => {
        console.log(error); 
    }); 
        //   axios.get('http://localhost:8000/plaid/transactions')
    //     .then(body => {
    //         console.log('Is there a body? ');
    //         console.log(body);
    //     }).catch(error => {
    //         console.log(error); 
    //     });
    }

    // getTransactionData = () => {
    //     axios.get('/plaid/transactions').then(res => {
    //         let transactions = res.data; 
    //         this.setState({data : transactions}); 
    //     });
    // }
  
    render() {
      return (
        <div>
            data: {this.state.data}
        </div>
      );
    }
  }
  
  export default Transaction;