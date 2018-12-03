import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Onboarding from './components/onboarding/onboardingOne';
import OnboardingTwo from './components/onboarding/onboardingTwo';
import OnboardingThree from './components/onboarding/onboardingThree';
import Home from './pages/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Router>
              <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/onboarding' component={Onboarding} />
                {/* <Route path="/spend" component={OnboardingTwo} />
                <Route path="/invest" component={OnboardingThree} /> */}
              </div>
            </Router>
        </header>
      </div>
    );
  }
}

export default App;
