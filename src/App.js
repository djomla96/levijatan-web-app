
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import HeaderSrl from './srl/Header';
import FooterSrl from './srl/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Program from './components/pages/Program';
import Contact from './components/pages/Contact';
import Form from './components/pages/Form';
import AdminLogin from './components/pages/AdminLogin';
import AdminPanel from './components/pages/AdminPanel';
import Video from './components/pages/Video';

import HomeSrl from './srl/pages/Home';
import AboutSrl from './srl/pages/About';
import ProgramSrl from './srl/pages/Program';
import ContactSrl from './srl/pages/Contact';
import FormSrl from './srl/pages/Form';
import VideoSrl from './srl/pages/Video';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import cookie from 'react-cookies';
import React, { Component } from 'react'
import history from "./utils/history";
export default class App extends Component {

  // componentDidMount() {
  //   document.addEventListener('contextmenu', function(e) {
  //     e.preventDefault();
  //   });

  //   document.onkeydown = function(e) {
  //     if(e.key == "F12") {
  //        return false;
  //     }
  //   }
  // }

  render() {
    const isLat = cookie.load('isLat');
    return (
      <Router history={history}>
        <div className="App">
          {isLat === 'true' ? <HeaderSrl /> : <Header />}
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/o-nama'} component={About} />
            <Route exact path={'/program-pokreta'} component={Program} />
            <Route exact path={'/kontakt'} component={Contact} />
            <Route exact path={'/pristupnica'} component={Form} />
            <Route exact path={'/admin'} component={AdminLogin} />
            <Route exact path={'/tgzy75cffx2s5tar8cx5wi3rmefo7klhxneeipfcxdohimso1oxx790ff'} component={AdminPanel} />
            <Route exact path={'/video-arhiva'} component={Video} />

            <Route path={'/srl'} component={HomeSrl} />
            <Route path={'/o-nama/srl'} component={AboutSrl} />
            <Route path={'/program-pokreta/srl'} component={ProgramSrl} />
            <Route path={'/kontakt/srl'} component={ContactSrl} />
            <Route exact path={'/pristupnica/srl'} component={FormSrl} />
            <Route exact path={'/admin/srl'} component={AdminLogin} />
            <Route exact path={'/tgzy75cffx2s5tar8cx5wi3rmefo7klhxneeipfcxdohimso1oxx790ff/srl'} component={AdminPanel} />
            <Route exact path={'/video-arhiva/srl'} component={VideoSrl} />
          </Switch>
          {isLat === 'true' ? <FooterSrl /> : <Footer />}

        </div>
      </Router>
    )
  }
}

