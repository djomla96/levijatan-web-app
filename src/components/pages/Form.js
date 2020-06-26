import React, { Component } from 'react'
import grb from '../../images/logos/grb.png';
import logo from '../../images/logos/logo.png';
import '../../css/form.css';

export default class Form extends Component {
    render() {
        const adresa = "ADRESA I OP{INA STANOVANJA"
        return (
            <div className="form-wrapper">
                <div className="logos">
                <div className="logo-2">
                        <img src={logo} />
                    </div>
                    <div className="logo-1">
                        <img src={grb} />
                    </div>
                </div>
                <div className="headline"><h1>PRISTUPNICA</h1></div>

                <form className="form-box">
                    <div className="form-input"><p>IME I PREZIME</p><input type="text" /></div>
                    <div className="form-input"><p>JMBG</p><input type="number"></input></div>
                    <div className="form-input"><p>{adresa}</p><input type="text"></input></div>
                    <div className="form-input"><p>TELEFON</p><input type="text"></input></div>
                    <div className="form-input"><p>E-MAIL</p><input type="email"></input></div>
                    <div className="form-input"><p>STEPEN STRUCNE SPREME</p><input type="text"></input></div>
                    <div className="form-input"><p>ZANIMANJE</p><input type="text"></input></div>

                    <div className="btn-submit"><button>Posalji pristupnicu</button></div>
                </form>
            </div>
        )
    }
}
