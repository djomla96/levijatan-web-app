
import React, { Component } from 'react'
import '../../css/about.css';

import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg'
import { Transition } from 'react-spring/renderprops'


export default class About extends Component {
    render() {
        return (
            <div>
    <div className="title"> О НАМА </div>
    <div className="banner-content">
      <div className="banner-contaner">
        <div className="banner-img">
        <Transition
            items={<div className="right"><img src={pic1} alt="picture1" /></div>} keys={item => item}
            from={{ transform: 'translateX(-100%)', opacity: 0, visibility: 'hidden', transition: 'all 1.5s ease-in-out' }}
            enter={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}
            leave={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}>
            {item => props => <div style={props}>{item}</div>}
        </Transition> 
        </div>
        <div className="banner-text">
        <Transition
            items={<div className="one">ЛЕВИЈАТАН ЈЕ НАСТАО У ГЛАВИ И СРЦУ ЕНТУЗИЈАСТЕ КАО ИДЕЈА "СНАЖНОГ ЧОВЕКА" КОЈИ ШТИТИ СЛАБИЈЕ ОД СЕБЕ. ПОЧЕЛО ЈЕ НЕЗВАНИЧНО 2015. ГОДИНЕ, ПРЕКО ЗВАНИЧНО РЕГИСТРОВАНЕ ФОНДАЦИЈЕ ЗА ЗАШТИТУ ЖИВОТИЊА "ФОНДАЦИЈА ПОКРЕТ ЛЕВИЈАТАН" 2018. ГОДИНЕ, ДО УДРУЖЕЊА "ПОКРЕТ ЛЕВИЈАТАН СРБИЈА" ОСНОВАНОГ 2019. ГОДИНЕ.</div>} keys={item => item}
            from={{opacity: 0, visibility: 'hidden', transition: 'all 2.5s ease-in-out' }}
            enter={{opacity: 1, visibility: 'visible' }}
            leave={{opacity: 1, visibility: 'visible' }}>
            {item => props => <div style={props}>{item}</div>}
        </Transition> 
        </div>
        {/* <div className="banner-text one">ЛЕВИЈАТАН ЈЕ НАСТАО У ГЛАВИ И СРЦУ ЕНТУЗИЈАСТЕ КАО ИДЕЈА "СНАЖНОГ ЧОВЕКА" КОЈИ ШТИТИ СЛАБИЈЕ ОД СЕБЕ. ПОЧЕЛО ЈЕ НЕЗВАНИЧНО 2015. ГОДИНЕ, ПРЕКО ЗВАНИЧНО РЕГИСТРОВАНЕ ФОНДАЦИЈЕ ЗА ЗАШТИТУ ЖИВОТИЊА "ФОНДАЦИЈА ПОКРЕТ ЛЕВИЈАТАН" 2018. ГОДИНЕ, ДО УДРУЖЕЊА "ПОКРЕТ ЛЕВИЈАТАН СРБИЈА" ОСНОВАНОГ 2019. ГОДИНЕ.</div> */}
      </div>
      <div className="banner-contaner second">
      <div className="banner-text">
        <Transition
            items={<div className="two">"ПОКРЕТ ЛЕВИЈАТАН СРБИЈА" ЈЕ ОСНОВАН РАДИ ОСТВАРИВАЊА ОПШТЕДРУШТВЕНИХ ЦИЉЕВА У ОБЛАСТИ ЗАШТИТЕ ПРАВА УГРОЖЕНИХ, ЗЛОСТАВЉАНИХ И БОЛЕСНИХ, ПРВЕНСТВЕНО ДЕЦЕ, ЖЕНА И ЖИВОТИЊА. ЦИЉ БОРБЕ ЈЕ ОЧУВАЊЕ ИДЕЈЕ "ПРАВО НА ЖИВОТ" СВАКОГ ЖИВОГ БИЋА, ШТО ПОДРАЗУМЕВА СТВАРАЊЕ ЕФИКАСНОГ ДРЖАВНОГ АПАРАТА КОЈИ ЋЕ БИТИ СУБЛИМАЦИЈА СВИХ ДОБРИХ ИСКУСТАВА У ОБЛАСТИ ЗАШТИТЕ ОД НАСИЉА.</div>} keys={item => item}
            from={{opacity: 0, visibility: 'hidden', transition: 'all 2.5s ease-in-out' }}
            enter={{opacity: 1, visibility: 'visible' }}
            leave={{opacity: 1, visibility: 'visible' }}>
            {item => props => <div style={props}>{item}</div>}
        </Transition> 
        </div>
        <div className="banner-img">
        <Transition
            items={<div className="left"><img src={pic2} className="img-fix" alt="picture2" /></div>} keys={item => item}
            from={{ transform: 'translateX(100%)', opacity: 0, visibility: 'hidden', transition: 'all 1.5s ease-in-out' }}
            enter={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}
            leave={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}>
            {item => props => <div style={props}>{item}</div>}
        </Transition>
        </div>
      </div>
    </div>
  </div>
        )
    }
}
