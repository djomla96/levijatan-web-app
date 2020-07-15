import React, { Component } from 'react'
import grb from '../../images/logos/grb.png';
import logo from '../../images/logos/logo.png';
import '../../css/form.css';
import axios from '../../axios/axios';
import Validator from 'validator';
import { withAlert } from 'react-alert'
import LoadingSpinner from '../LodingSpinner';

class Form extends Component {

    state = {
        imePrezime: "",
        jmbg: "",
        adresa: "",
        telefon: "",
        email: "",
        sss: "",
        zanimanje: "",
        loading: false,
        aktivnost: true
    }

    saveBot(data) {
        this.setState({ loading: true });
        axios.post('/pristupnice/save', data)
            .then(response => {
                this.setState({ loading: false });
                this.setState({ imePrezime: "", jmbg: "", adresa: "", telefon: "", email: "", sss: "", zanimanje: ""});
                this.props.alert.show('Cestitamo uspesno ste poslali pristupnicu', { type: 'success' })
            }).catch(error => {
                this.props.alert.show(error.response.data.message, { type: 'error' });
                console.log(error);
                this.setState({ loading: false });
            })
    }

    validate(data) {
        const { imePrezime, jmbg, adresa, telefon, email, sss, zanimanje } = data;
        data.datumKreiranja = new Date();
        if(
            Validator.isEmpty(imePrezime) ||
            Validator.isEmpty(jmbg.toString()) ||
            Validator.isEmpty(adresa) ||
            Validator.isEmpty(telefon) ||
            Validator.isEmpty(email) ||
            Validator.isEmpty(sss) ||
            Validator.isEmpty(zanimanje)
        ) {
            this.props.alert.show('Molimo popunite sva polja', { type: 'error' });
            return;
        }

        if(!Validator.isEmail(email)) {
            this.props.alert.show('Molimo unesite pravilan mail', { type: 'error' });
            return;
        }

        if(!Validator.isLength(jmbg.toString(), { min: 13, max: 13 })) {
            this.props.alert.show('Molimo unesite pravilan JMBG', { type: 'error' });
            return;
        }

        if(!Validator.isMobilePhone(telefon, 'sr-RS')) {
            this.props.alert.show('Molimo unesite pravilan broj telefona', { type: 'error' });
            return;
        }

        this.saveBot(data);
    }

    sendData(event) {
        event.preventDefault();
        this.validate(this.state);
    }

    render() {
        const adresa = "ADRESA I OP{TINA STANOVAWA";
        const stepen = "STEPEN STRU;NE SPREME";
        const buttonText = "PO{AQI PRISTUPNICU";
        let aktivnostText;
        if(this.state.aktivnost) {
            aktivnostText = "AKTIVAN"
        } else {
            aktivnostText = "NEAKTIVAN"
        }
        return (
            <>
            {this.state.loading ? <LoadingSpinner /> : null}
            <div className="form-wrapper">
                <div className="logos">
                <div className="logo-2">
                        <img src={logo} />
                    </div>
                    <div className="logo-1">
                        <img src={grb} />
                    </div>
                </div>
                <div className="text-wrapper">
                    <h2>Позивамо искрене <span>Србе</span>, преостало здраво и патриотско ткиво нашег разрушеног и нападнутог друштва да се придруже и да покажу да постојимо и да нас још увек има! Наш национални идентитет је доведен у питање, а он је битнији од политике и сваког ситног политичког поена.</h2>
                    <p>Услед повећања обима посла и јачања Покрета Левијатан Србија и Националне одбране, расписујемо ову приступницу. Сврха саме приступнице је јачање круга деловања и ширење наше мреже, као и јачање здраве идеје широм територије Републике Србије. Сваки округ ће имати своје надлежне органе и председнике који ће имати јасно дефинисана задужења и функције, које се морају схватити озбиљним! Потписивањем ове приступнице потписник активно учествује у раду покрета!</p>
                    <p>Приступница се састоји од АКТИВНИХ и НЕАКТИВНИХ и чланова.</p>
                    <p>Сваки округ ће имате своје надлежне органе и председнике који ће имати јасно дефинисана задужења и функције које се морају схватити озбиљним, а за наведене дужности могу конкурисати искључиво активни чланови, који ће својим деловањем активно учествовати у раду покрета. Цена чланарине на месечном нивоу износи 600рсд.</p>
                    <p>Неактивни чланови својим деловањем директно не утичу у раду покрета али могу имати одређене активности. Њихов допринос се огледа у томе што су једни од нас, а слога и јачање покрета су тренутно од неопроцењиве важности.</p>
                </div>
                <div className="headline"><h1>PRISTUPNICA</h1></div>

                <form className="form-box">
                    <div className="form-input"><p>IME I PREYIME</p><input value={this.state.imePrezime} onChange={(event) => this.setState({ imePrezime: event.target.value })} type="text" /></div>
                    <div className="form-input"><p>JMBG</p><input value={this.state.jmbg} onChange={(event) => this.setState({ jmbg: event.target.value })} type="number"/></div>
                    <div className="form-input"><p>{adresa}</p><input value={this.state.adresa} onChange={(event) => this.setState({ adresa: event.target.value })} type="text"></input></div>
                    <div className="form-input"><p>TELEFON</p><input value={this.state.telefon} onChange={(event) => this.setState({ telefon: event.target.value })} type="text"></input></div>
                    <div className="form-input"><p>E-MAIL</p><input value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} type="email"></input></div>
                    <div className="form-input"><p>{stepen}</p><input value={this.state.sss} onChange={(event) => this.setState({ sss: event.target.value })} type="text"/></div>
                    <div className="form-input"><p>YANIMAWE</p><input value={this.state.zanimanje} onChange={(event) => this.setState({ zanimanje: event.target.value })} type="text"></input></div>
                    <div className="form-input"><p>Aktivnost</p><input className="aktivnost" name="aktivnost" type="checkbox" checked={this.state.aktivnost} onChange={(event) => this.setState({ aktivnost: !this.state.aktivnost })} /><label>{aktivnostText}</label></div>

                    <div className="btn-submit" onClick={(event) => this.sendData(event)}><button>{buttonText}</button></div>
                </form>
            </div>
            </>
        )
    }
}

export default withAlert()(Form);