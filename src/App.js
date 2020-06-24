
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import HeaderSrl from './srl/Header';
import FooterSrl from './srl/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Program from './components/pages/Program';
import Contact from './components/pages/Contact';


import HomeSrl from './srl/pages/Home';
import AboutSrl from './srl/pages/About';
import ProgramSrl from './srl/pages/Program';
import ContactSrl from './srl/pages/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import cookie from 'react-cookies';
import React, { Component } from 'react'
import history from "./utils/history";
export default class App extends Component {
  render() {
    const isLat = cookie.load('isLat');
    return (
      <Router history={history}>
      <div className="App">
        {isLat === 'true' ? <HeaderSrl /> : <Header />}
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/o-nama'} component={About}/>
            <Route exact path={'/program-pokreta'} component={Program}/>
            <Route exact path={'/kontakt'} component={Contact}/>

            <Route path={'/srl'} component={HomeSrl}/>
            <Route path={'/o-nama/srl'} component={AboutSrl}/>
            <Route path={'/program-pokreta/srl'} component={ProgramSrl}/>
            <Route path={'/kontakt/srl'} component={ContactSrl}/>
          </Switch>
        {isLat === 'true' ? <FooterSrl /> : <Footer />}
        
      </div>
    </Router>
    )
  }
}

