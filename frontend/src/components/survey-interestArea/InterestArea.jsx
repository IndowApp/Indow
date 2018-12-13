import React, { Component } from 'react';
import './InterestArea.css';
import Slider from "react-slick";
//icons
import safeBox from '../../images/interestArea-icons/financials.svg'
import energy from '../../images/interestArea-icons/energy.svg'
import store from '../../images/interestArea-icons/store.svg'
import food from '../../images/interestArea-icons/food.svg'
import oil from '../../images/interestArea-icons/oil.svg'
import heartbeat from '../../images/interestArea-icons/heartbeat.svg'
import factory from '../../images/interestArea-icons/factory.svg'
import technology from '../../images/interestArea-icons/technology.svg'
import wifiRouter from '../../images/interestArea-icons/wifi-router.svg'
import mine from '../../images/interestArea-icons/mine.svg'
import buildings from '../../images/interestArea-icons/buildings.svg'

const images = {
    "Financials" : safeBox,
    "Utilities" : energy,
    "Non-Essentials" : store, 
    "Essentials" : food, 
    "Energy" : oil, 
    "Healthcare" : heartbeat,
    "Industrials" : factory, 
    "Technology" : technology, 
    "Telecom" : wifiRouter, 
    "Materials" : mine, 
    "RealEstate" : buildings
};

class InterestCard extends Component{
    /*
        Props: 
        sector (string) - financials, materials, realEstate, etc
        companyType (string) - e.g if financials, companyType = Banks, Insurance companies
        info (string) - 1 sentence summary of this sector

    */
    constructor(props){
        super(props); 
        this.state = {
            isClicked : false,
        }
    }

    onClick = (e) => {
        this.setState({isClicked : !this.state.isClicked}); 
        console.log(this.state.isClicked);
    }

    render() {
        return(
            <div className="interestArea"  id={this.props.sector} onClick={this.onClick}>
                <h2>{this.props.sector}</h2>
                <img src={images[this.props.sector]} className="" alt="Money safe illustration" />
                <p className="companyType">{this.props.companyType}</p>
                <p>{this.props.info}</p>
            </div>
        )
    }
}

class InterestArea extends Component {
    constructor(props){
        super(props); 
        this.state ={
        }
    }

    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          
        return (
            <div className="interestArea-wrapper">
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />   
               <div>
                <h2>Areas of Interest</h2>
                <h4>Which sectors of the financial market interest you the most?</h4>
                <p>Pick as many as you like</p>
                <Slider {...settings}>
                    {/* slide 1 */}
                    <div className="slideWrapper">
                        <InterestCard sector="Financials" companyType="Banks, investment funds, and insurance companies" info="The majority of the revenue generated by the sector comes from mortgages and loans that gain value as interest rates rise"/>
                        <InterestCard sector="Utilities" companyType="Electric, gas, and water companies" info="In general, the sector generates consistent recurring income by charging consumers and businesses that provide higher-than-average dividend yields."/>
                        <InterestCard sector="Non-Essentials" companyType="Retailers, media companies, and consumer service providers" info="In general, these companies benefit from an improving economy when consumer spending accelerates."/>
                    </div>
                    {/* slide 2 */}
                    <div className="slideWrapper">
                        <InterestCard sector="Essentials" companyType="Food and beverage companies" info="These companies create products consumers are unwilling to cut from their budgets. In general, these are defensive plays capable of withstanding an economic downturn."/>
                        <InterestCard sector="Energy" companyType="Oil and gas exploration and production companies" info="These companies generate revenue that’s tied to the price of crude oil, natural gas and other commodities."/>
                        <InterestCard sector="Healthcare" companyType="Biotechnology companies, hospital management firms, and medical device manufacturers" info="The sector is considered to be both a growth opportunity and defensive play since people will always require medical aid."/> 
                    </div>
                    {/* slide 3 */}
                    <div className="slideWrapper"> 
                        <InterestCard sector="Industrials" companyType="Aerospace, defense, machinery, construction, and manufacturing companies" info="In general, the industry’s growth is driven by demand for building construction and manufactured products like agricultural equipment."/>
                        <InterestCard sector="Technology" companyType="Electronics manufacturers, software and information technology firms" info="These businesses are driven by upgrade cycles and the general health of the economy, although growth has been robust over the years." />  
                        <InterestCard sector="Telecom" companyType="Wireless providers, cable companies, internet service providers and satellite companies" info="In general, these companies generate recurring revenue from consumers, but some subsets of the industry are facing rapid change."/>
                    </div>
                    {/* slide 4 */}
                    <div className="slideWrapper smallSlider">
                        <InterestCard sector="Materials" companyType="Mining, refining, chemical, and forestry companies "  info="Companies focused on discovering and developing raw materials. They are at the beginning of the supply chain, so vulnerable to changes in the business cycle."/>
                        <InterestCard sector="RealEstate" companyType="Residential, industrial, and retail real estate" info="The main source of revenue for these companies comes from rent income and real estate capital appreciation. As a result, this sector is sensitive to interest rate changes."/>
                    </div>
                </Slider>
                </div>
            </div>
        );
    }
        
}
export default InterestArea;