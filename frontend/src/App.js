import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Onboarding from './components/onboarding/onboardingOne';
import OnboardingTwo from './components/onboarding/onboardingTwo';
import OnboardingThree from './components/onboarding/onboardingThree';
import Survey from './pages/survey/survey';
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
                <Route exact path='/onboarding-2' component={OnboardingTwo} />
                <Route exact path='/onboarding-3' component={OnboardingThree} /> 
                <Route exact path='/survey' component={Survey} /> 
              </div>
            </Router>
        </header>
      </div>
    );
  }
}

export default App;
