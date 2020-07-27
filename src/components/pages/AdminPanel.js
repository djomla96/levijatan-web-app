import React, { Component } from 'react'
import '../../css/panel.css';
import DataTable from 'react-data-table-component';
import axios from '../../axios/axios';
import cookie from 'react-cookies';
import { withAlert } from 'react-alert'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

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
        data: [],
        showButton: false,
        excelData: []
    }
    
    componentDidMount() {
        axios.post("/pristupnice/get-by-token", { token: cookie.load('lev_token')})
            .then(() => {
                this.getData();
            }).catch(error => {
                this.setState({ showButton: true });
                this.props.alert.show(error.response.data.message, { type: error.response.data.status });
            })
        
    }

    exportToCSV(csvData, fileName) {

        let excel_data = [];
        try {
            csvData.map(item => {
                delete item["_id"];
                delete item["__v"];
                item.datumKreiranja = item.datumKreiranja.split("T")[0];
                excel_data.push(item);
            })
        } catch(error) {
            console.log(error);
            this.props.alert.show("Doslo je do problema na serveru, kontaktirajte inzenjera", { type: "error" });
        }
        

        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet(excel_data);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    getData() {
        axios.post('/pristupnice', {token: cookie.load('lev_token')})
            .then(response => {
                const { data } = response;
                
                this.setState({ data: data });

            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        let dateObj = new Date();
        let month = monthNames[dateObj.getMonth()];
        let day = String(dateObj.getDate()).padStart(2, '0');
        let year = dateObj.getFullYear();
        let file_name = month  + ' ' + day  + ' ' + year + "_PRISTUPNICE_LEVIJATAN" ;
        return (
            <div>
                <h2 className="title-panel">lista qudi koji su popunili pristupnicu na sajtu</h2>
                {this.state.showButton ? <a className="go-to-login" href="/admin">Login</a> : null}
                <div className="button-wrapper"><button onClick={() => this.exportToCSV(this.state.data, file_name)}>Export to excel</button></div>
                <DataTable
                    columns={columns}
                    data={this.state.data} 
                />
            </div>
        )
    }
}

export default withAlert()(AdminPanel);
