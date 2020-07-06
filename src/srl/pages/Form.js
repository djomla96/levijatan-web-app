import React, { Component } from 'react'
import grb from '../../images/logos/grb.png';
import logo from '../../images/logos/logo.png';
import '../../css/form.css';
import axios from '../../axios/axios';
import Validator from 'validator';
import { withAlert } from 'react-alert'

class Form extends Component {

    state = {
        imePrezime: "",
        jmbg: null,
        adresa: "",
        telefon: "",
        email: "",
        sss: "",
        zanimanje: "",
    }

    saveBot(data) {
        axios.post('/pristupnice/save', data)
            .then(response => {
                this.setState({ imePrezime: "", jmbg: 0, adresa: "", telefon: "", email: "", sss: "", zanimanje: ""});
                this.props.alert.show('Cestitamo uspesno ste poslali pristupnicu', { type: 'success' })
            }).catch(error => console.log(error))
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
                <div className="text-wrapper">
                    <h2>Pozivamo iskrene <span>Srbe</span>, preostalo zdravo i patriotsko tkivo našeg razrušenog i napadnutog društva da se pridruže i da pokažu da postojimo i da nas još uvek ima! Naš nacionalni identitet je doveden u pitanje a on je bitniji od politike i svakog sitnog političkog poena!</h2>
                    <p>Usled povećanja obima posla i jačanja pokreta Levijatan Srbija i Nacionalne odbrane, raspisujemo ovu pristupnicu. Svrha same pristupnice je jačanje kruga delovanja i širenje naše mreže, kao i jačenje zdrave ideje širom teritorije republike Srbije. Svaki okrug će imati svoje nadležne organe i predsednike koji će imati jasno definisana zaduženja i funkcije, koje se moraju shvatati ozbiljnim! Potpisivanjem ove pristupnice, potpisnik aktivno učestvuje u radu pokreta!</p>
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

                    <div className="btn-submit" onClick={(event) => this.sendData(event)}><button>{buttonText}</button></div>
                </form>
            </div>
        )
    }
}

export default withAlert()(Form);
