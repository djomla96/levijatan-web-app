import React, { Component} from 'react';
import gifImg from '../../images/flag.gif';
import bannerLogo from '../../images/bannerlogo.png';
import '../../css/home.css'

export default class Home extends Component {

    componentDidMount() {
        const icon = window.document.querySelector('.right-part img');
        const banner_text = document.querySelector('.left-part');
        
        icon.classList.add('show-animation');
        banner_text.classList.add('show-animation')
    }

    render() {
        const bannerText = "DOBRO DO{LI NA YVANI;AN SAJT";
        return (
            <div>
                <div className="section-one">
                    <div className="two-parts">
                    <div className="left-part">
                        <div className="banner-text"> <span>{bannerText}
                        </span><span className="span2">pokreta Levijatan
                            Srbija</span></div>
                        <div className="gif-container"><img className="animated-gif" src={gifImg} alt="flag" /></div>
                    </div>
                    <div className="right-part"><img src={bannerLogo} /></div>
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

