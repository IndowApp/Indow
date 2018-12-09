/* This is a tiny component that displays a company name, stock price, and a buy button for the user */

import React, { Component } from 'react';
import '../../index.css';
import './market-mover.css'
import axios from 'axios'; 

class MarketMoverCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : [],
            price : 0, 
            company : this.props.company            
        };
    }

    getMarketMoverData = (company) => {
        axios.get('https://api.iextrading.com/1.0/stock/' + company + '/company')
        .then(
            res => {
                let data = res.data; 
                this.setState({name : data}); 
                console.log(this.state.name); 

            })
        .catch(err => {
            console.log(err);
        });
    }

    getMarketMoverPrice = (company) => {
        axios.get('https://api.iextrading.com/1.0/stock/' + company + '/price')
        .then(
            res => { 
                let price = res
                this.setState({price : price.data}); 
                console.log(this.state.marketCardPrice);
            })
        .catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        console.log('component mounted'); 
        this.getMarketMoverData(this.props.company);
        this.getMarketMoverPrice(this.props.company);
    }

    render() {
        return(
            <div>
                <h3>{this.state.name.companyName}</h3>
                <p>{this.state.name.sector}</p>
                <p>${this.state.price}</p>
            </div>
        )
    }
}

class MarketMover extends Component {
    constructor(props){
        super(props); 
        this.state = {
           
        }
    }

    render () {
        return (
            <div className="marketmover">
                <h3>Market Mover</h3>
                <button className="marketBuy"><MarketMoverCard company='aapl'/><button>+Buy</button></button>
                <button className="marketBuy"><MarketMoverCard company='pegi'/><button>+Buy</button></button>
                <button className="marketBuy"><MarketMoverCard company='jnj'/><button>+Buy</button></button>
            </div>
        );
    }
        
}
export default MarketMover;