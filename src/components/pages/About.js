
import React, { Component } from 'react'
import '../../css/about.css';

import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg'



export default class About extends Component {
    componentDidMount() {
        const rightImg = document.querySelector(".right");
        const leftImg = document.querySelector(".left");

        const text1 = document.querySelector(".one");
        const text2 = document.querySelector(".two");

        rightImg.classList.add("show-animation");
        leftImg.classList.add("show-animation");

        text1.classList.add("show-animation");
        text2.classList.add("show-animation");
    }
    render() {
        return (
            <div>
    <div className="title"> О НАМА </div>
    <div className="banner-content">
      <div className="banner-contaner">
        <div className="banner-img  right"><img src={pic1} alt="picture1" /></div>
        <div className="banner-text one">ЛЕВИЈАТАН ЈЕ НАСТАО У ГЛАВИ И СРЦУ ЕНТУЗИЈАСТЕ КАО ИДЕЈА "СНАЖНОГ ЧОВЕКА" КОЈИ
          ШТИТИ
          СЛАБИЈЕ ОД СЕБЕ. ПОЧЕЛО ЈЕ НЕЗВАНИЧНО 2015. ГОДИНЕ, ПРЕКО ЗВАНИЧНО РЕГИСТРОВАНЕ ФОНДАЦИЈЕ ЗА ЗАШТИТУ ЖИВОТИЊА
          "ФОНДАЦИЈА ПОКРЕТ ЛЕВИЈАТАН" 2018. ГОДИНЕ, ДО УДРУЖЕЊА "ПОКРЕТ ЛЕВИЈАТАН СРБИЈА" ОСНОВАНОГ 2019. ГОДИНЕ.</div>
      </div>
      <div className="banner-contaner second">
        <div className="banner-text two">"ПОКРЕТ ЛЕВИЈАТАН СРБИЈА" ЈЕ ОСНОВАН РАДИ ОСТВАРИВАЊА ОПШТЕДРУШТВЕНИХ ЦИЉЕВА У
          ОБЛАСТИ ЗАШТИТЕ ПРАВА УГРОЖЕНИХ, ЗЛОСТАВЉЕНИХ И БОЛЕСНИХ, ПРВЕНСТВЕНО ДЕЦЕ, ЖЕНА И ЖИВОТИЊА. ЦИЉ БОРБЕ ЈЕ
          ОЋУВАЊЕ ИДЕЈЕ "ПРАВО НА ЖИВОТ" СВАКОГ ЖИВОГ БИЋА, ШТО ПОДРАЗУМЕВА СТВАРАЊЕ ЕФИКАСНОГ ДРЖАВНОГ АПАРАТА КОЈИ ЋЕ
          БИТИ СУБЛИМАЦИЈА СВИХ ДОБРИХ ИСКУСТАВА У ОБЛАСТИ ЗАШТИТЕ ОД НАСИЉА.</div>
        <div className="banner-img left"><img src={pic2} className="img-fix" alt="picture2" /></div>
      </div>
    </div>
  </div>
        )
    }
}
