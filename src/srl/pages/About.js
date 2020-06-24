
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
        <div className="banner-text one">LEVIJATAN JE NASTAO U GLAVI I SRCU ENTUZIJASTE KAO IDEJA "SNAŽNOG ČOVEKA" KOJI ŠTITI
        SLABIJE OD SEBE. POČELO JE NEZVANIČNO 2015. GODINE, PREKO ZVANIČNO REGISTROVANE FONDACIJE ZA ZAŠTITU ŽIVOTINjA
        "FONDACIJA POKRET LEVIJATAN" 2018. GODINE, DO UDRUŽENjA "POKRET LEVIJATAN SRBIJA" OSNOVANOG 2019. GODINE.</div>
      </div>
      <div className="banner-contaner second">
        <div className="banner-text two">"POKRET LEVIJATAN SRBIJA" JE OSNOVAN RADI OSTVARIVANjA OPŠTEDRUŠTVENIH CILjEVA U
        OBLASTI ZAŠTITE PRAVA UGROŽENIH, ZLOSTAVLjENIH I BOLESNIH, PRVENSTVENO DECE, ŽENA I ŽIVOTINjA. CILj BORBE JE
        OĆUVANjE IDEJE "PRAVO NA ŽIVOT" SVAKOG ŽIVOG BIĆA, ŠTO PODRAZUMEVA STVARANjE EFIKASNOG DRŽAVNOG APARATA KOJI ĆE
        BITI SUBLIMACIJA SVIH DOBRIH ISKUSTAVA U OBLASTI ZAŠTITE OD NASILjA.</div>
        <div className="banner-img left"><img src={pic2} className="img-fix" alt="picture2" /></div>
      </div>
    </div>
  </div>
        )
    }
}
