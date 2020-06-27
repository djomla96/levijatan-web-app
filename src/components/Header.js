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
    cookie.save('isLat', true, { path: '/' });
  }

  render() {
    let currentRoute = history.location.pathname;
    if(currentRoute === "/") currentRoute = "";
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
      <div className="social-text"> <span> ЋИР<a className="press" href={`${currentRoute}/srl`} onClick={() => this.saveCookie()}>/LAT</a></span></div>
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
          <a className="text" href="/">ПОЧЕТНА</a>
        </li>
        <li><a className="text" href="/o-nama">О НАМА</a></li>
        <li><a className="text" href="/program-pokreta">ПРОГРАМ</a></li>
        {/* <!-- <li><a className="text" href="/video-arhiva">ВИДЕО АРХИВА</a></li> --> */}
        <li><a className="text" href="/kontakt">КОНТАКТ</a></li>
        <li><a className="text" href="/pristupnica">ПРИСТУПНИЦА</a></li>
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


