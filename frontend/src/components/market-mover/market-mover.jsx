/* This is a tiny component that displays a company name, stock price, and a buy button for the user */

import React, { Component } from 'react';
import '../../index.css';
import './market-mover.css'

class MarketMover extends Component {
    render () {
        return (
            <div className="marketmover">
                <h3>Market Mover</h3>
                <button className="marketBuy"><h3>Google</h3><p>$2,00</p><button>+ Buy</button></button>
                <button className="marketBuy"><h3>Facebook</h3><p>$50c</p><button>+ Buy</button></button>
                <button className="marketBuy"><h3>Walmart</h3><p>$1,000</p><button>+ Buy</button></button>
            </div>
        );
    }
        
}
export default MarketMover;