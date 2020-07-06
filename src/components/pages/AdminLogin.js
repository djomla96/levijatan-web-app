import React, { Component } from 'react'
import '../../css/login.css';
import Validator from 'validator';
import { withAlert } from 'react-alert'
import axios from '../../axios/axios';
import cookie from 'react-cookies';
import LoadingSpinner from '../LodingSpinner';

class AdminLogin extends Component {
    state = {
        email: "",
        password: "",
        loading: false
    }

    submitSignIn(event, data) {
        event.preventDefault();
        const { email, password } = data;
        let isValid = false;
        let token = "";
        
        if(Validator.isEmpty(email) || Validator.isEmpty(password)) {
          this.props.alert.show('Popunite sva polja', { type: 'error' });
          return;
        }

        if(!Validator.isEmail(email)) {
          this.props.alert.show('Unesite pravilan email', { type: 'error' });
          return;
        }

        this.setState({ loading: true });
        axios.post('/pristupnice/login', { data })
          .then(response => {
            const { data } = response
            this.props.alert.show(data.message, { type: data.status });
            cookie.save('lev_token', data.token, { path: '/' });
            this.props.history.push('/tgzy75cffx2s5tar8cx5wi3rmefo7klhxneeipfcxdohimso1oxx790ff');
            this.setState({ loading: false });
          }).catch(error => {
            console.log(error);
            this.props.alert.show(error.response.data.message, { type: error.response.data.status });
            this.setState({ loading: false });
          });
    }

    render() {
        const headline = "DOBRO DO{LI NA ADMIN PANEL LEVIJATAN";
        return (
          <>
          {this.state.loading ? <LoadingSpinner /> : null}
            <div className="form-wrapper-login">
                <form className="login-form">
        <h1 className="login-header">{headline}</h1>
        
        <div className="input-field margin-b">
          <img className="input-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png" />
          <input
            onChange={(event) => this.setState({ email: event.target.value }) }
            className="login-input" 
            type="text"
            value={this.state.email} 
            required
            placeholder="Email" 
          />
        </div>        
        
        <div className="input-field">
          <img className="input-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png" />
          <input
            onChange={(event) => this.setState({ password: event.target.value })}
            className="login-input" 
            type="password"
            value={this.state.password}
            required 
            placeholder="Password" 
          />
        </div>
        
        <div className="form-buttons">          
          <button onClick={(event) => this.submitSignIn(event, this.state) } type="submit" className="login-button">ULOGUJTE SE</button>
        </div>         
      </form>
            </div>
            </>
        )
    }
}

export default withAlert()(AdminLogin);
