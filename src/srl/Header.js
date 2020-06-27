import '../css/header.css'
import logo from '../images/new-logo.png'

import React, { Component } from 'react'
import cookie from 'react-cookies';
import history from "../utils/history";
export default class Header extends Component {
  componentDidMount() {
    const burger = document.querySelector('.burger');
    const closeNav = document.querySelector('.nav-close');
    const navList = document.querySelector('.nav-list');
    burger.addEventListener('click', function() {
        navList.classList.add('show-nav');
    })

    closeNav.addEventListener('click', function() {
        navList.classList.remove('show-nav');
    })
  }

  saveCookie() {
    cookie.save('isLat', false, { path: '/' });
  }

  render() {
    let currentRoute = history.location.pathname;
    let nextRoute = "";

    if(currentRoute === "/srl") nextRoute = "/"
    else nextRoute = currentRoute.replace('/srl', "");

    return (
      <div>
        <div className="social-networks">
    <div className="icons">
      <a href="https://www.facebook.com/pasazot/"> <i className="fa fa-facebook nf"></i></a>
      <a href="https://www.instagram.com/pasazot/?hl=sr"> <i className="fa fa-instagram ni"></i></a>
      <a href="https://twitter.com/pasazot?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i
          className="fa fa-twitter nt"></i></a>
    </div>
    <div className="social-right">
      <div className="social-img"><i className="fa fa-book b"></i></div>
      <div className="social-text"> <span> <a className="press" href={nextRoute} onClick={() => this.saveCookie()}>ЋИР</a>/LAT</span></div>
    </div>
  </div>
  <nav>
  <div className="wrapper">
    <div className="header">
      <div className="logo_text">
        <a className="navbar-brand">
          <span><img className="logo-header" src={logo} /></span>
          <span className="brand-text">POKRET LEVIJATAN<br/> <span className="span1">SRBIJA</span>
          </span>
        </a>
      </div>
      <ul className="nav-list">
        <li>
          <a className="text" href="/srl">POČETNA</a>
        </li>
        <li><a className="text" href="/o-nama/srl">O NAMA</a></li>
        <li><a className="text" href="/program-pokreta/srl">PROGRAM</a></li>
        {/* <!-- <li><a className="text" href="/video-arhiva">ВИДЕО АРХИВА</a></li> --> */}
        <li><a className="text" href="/kontakt/srl">KONTAKT</a></li>
        <li><a className="text" href="/pristupnica">PRISTUPNICA</a></li>
        <li className="nav-close"><i className="fa fa-close"></i></li>
      </ul>
      <div className="burger">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  </div>
</nav>
</div>
    )
  }
}


