/* This is a tiny component that displays a company name, stock price, and a buy button for the user */

import React, { Component } from 'react';
import '../../index.css';
import './market-mover.css'
import axios from 'axios'; 

class MarketMoverCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        let name = this.props.cardName;
        let price = this.props.cardPrice; 
        return(
            <div>
                <h3>{name.companyName}</h3>
                <p>{name.website}</p>
                <p>${price}</p>
            </div>
        )
    }
}

class MarketMover extends Component {
    constructor(props){
        super(props); 
        this.state = {
            marketCardName : [],
            marketCardPrice : 0
        }
    }

    getMarketMoverData = (company) => {
        axios.get('https://api.iextrading.com/1.0/stock/' + company + '/company')
        .then(
            res => {
                let data = res.data; 
                this.setState({marketCardName : data}); 
                console.log(this.state.marketCardName); 

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
                this.setState({marketCardPrice : price.data}); 
                console.log(this.state.marketCardPrice);
            })
        .catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        console.log('component mounted'); 
        this.getMarketMoverData('aapl');
        this.getMarketMoverPrice('aapl');
    }


    render () {
        return (
            <div className="marketmover">
                <h3>Market Mover</h3>
                <button className="marketBuy"><MarketMoverCard cardName={this.state.marketCardName} cardPrice={this.state.marketCardPrice}/><button>+Buy</button></button>
                <button className="marketBuy"><h3>Facebook</h3><p>$50c</p><button>+Buy</button></button>
                <button className="marketBuy"><h3>Walmart</h3><p>$1,000</p><button>+Buy</button></button>
            </div>
        );
    }
        
}
export default MarketMover;