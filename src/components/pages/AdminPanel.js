import React, { Component } from 'react'
import '../../css/panel.css';
import DataTable from 'react-data-table-component';
import axios from '../../axios/axios';
import cookie from 'react-cookies';
import { withAlert } from 'react-alert'

const columns = [
    { name: 'Ime i prezime', selector: 'imePrezime'},
    { name: 'JMBG', selector: 'jmbg'}, 
    { name: 'Adresa', selector: 'adresa'},
    { name: 'Telefon', selector: 'telefon'}, 
    { name: 'Email', selector: 'email'},
    { name: 'Stepen strucne spreme', selector: 'stepenSpreme'},
    { name: 'Zanimanje', selector: 'zanimanje'},
    { name: 'Aktivnost', selector: 'aktivnost'}
];

class AdminPanel extends Component {
    state = {
        bots: [],
        showButton: false
    }
    
    componentDidMount() {
        axios.post("/pristupnice/get-by-token", { token: cookie.load('lev_token')})
            .then(() => {
                this.getBots();
            }).catch(error => {
                this.setState({ showButton: true });
                this.props.alert.show(error.response.data.message, { type: error.response.data.status });
            })
        
    }

    getBots() {
        axios.post('/pristupnice', {token: cookie.load('lev_token')})
            .then(response => {
                const { data } = response;
                console.log(data);
                this.setState({ bots: data });
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h2 className="title-panel">Lista qudi koji su popunili pristupnicu na sajtu</h2>
                {this.state.showButton ? <a className="go-to-login" href="/admin">Login</a> : null}
                <DataTable
                    columns={columns}
                    data={this.state.bots} 
                />
            </div>
        )
    }
}

export default withAlert()(AdminPanel);
