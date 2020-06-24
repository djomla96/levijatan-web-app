import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Program from './components/pages/Program';
import Contact from './components/pages/Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/o-nama'} component={About}/>
            <Route path={'/program-pokreta'} component={Program}/>
            <Route path={'/kontakt'} component={Contact}/>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
