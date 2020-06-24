import React, { Component} from 'react';
import gifImg from '../../images/flag.gif';
import bannerLogo from '../../images/bannerlogo.png';
import '../../css/home.css'
import { Transition } from 'react-spring/renderprops'

export default class Home extends Component {

    render() {
        const bannerText = "DOBRO DO{LI NA YVANI;AN SAJT";
        return (
            <div>
                <div className="section-one">
                    <div className="two-parts">
                    <Transition
                        items={<div className="left-part">
                        <div className="banner-text"> <span>{bannerText}
                        </span><span className="span2">pokreta Levijatan
                            Srbija</span></div>
                            
                        <div className="gif-container"><img className="animated-gif" src={gifImg} alt="flag" /></div>
                    </div>} keys={item => item}
                        from={{ opacity: 0, visibility: 'hidden', transition: 'all 4s ease-in-out' }}
                        enter={{ opacity: 1, visibility: 'visible' }}
                        leave={{ opacity: 1, visibility: 'visible' }}>
                        {item => props => <div style={props}>{item}</div>}
                    </Transition>
                    
                    <Transition
                        items={<div className="right-part"><img src={bannerLogo} /></div>} keys={item => item}
                        from={{ transform: 'translateX(100%)', opacity: 0, visibility: 'hidden', transition: 'all 1.5s ease-in-out' }}
                        enter={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}
                        leave={{ transform: 'translateX(0)', opacity: 1, visibility: 'visible' }}>
                        {item => props => <div style={props}>{item}</div>}
                    </Transition>
                    </div>
                </div>
                <div className="section-three">
                <div className="wrapper">
                <div className="social-info">ПОКРЕТ ЛЕВИЈАТАН НА ДРУШТВЕНИМ МРЕЖАМА</div>
                <ul className="social-networks-bottom">
                    <li className="social-item"> <a href="https://www.facebook.com/pasazot/"><i className="fa fa-facebook fa-3x f"></i></a>
                    </li>
                    <li className="social-item"> <a href="https://www.instagram.com/pasazot/?hl=sr"><i
                        className="fa fa-instagram fa-3x i"></i></a> </li>
                    <li className="social-item"> <a
                        href="https://twitter.com/pasazot?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i
                        className="fa fa-twitter fa-3x t"></i></a> </li>
                </ul>
                </div>
            </div>
          </div>
        )
    }
}

