import React, { Component } from 'react'
import '../../css/panel.css';
import DataTable from 'react-data-table-component';
import axios from '../../axios/axios';
import cookie from 'react-cookies';
import { withAlert } from 'react-alert'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const columns = [
    { name: 'Ime i prezime', selector: 'imePrezime' },
    { name: 'JMBG', selector: 'jmbg' },
    { name: 'Adresa', selector: 'adresa' },
    { name: 'Telefon', selector: 'telefon' },
    { name: 'Email', selector: 'email' },
    { name: 'Stepen strucne spreme', selector: 'stepenSpreme' },
    { name: 'Zanimanje', selector: 'zanimanje' },
    { name: 'Aktivnost', selector: 'aktivnost' }
];

const columns2 = [
    { name: 'Ime i prezime', selector: 'imePrezime' },
    { name: 'Broj telefona', selector: 'brojTelefona' },
    { name: 'Grad', selector: 'grad' },
    { name: 'Adresa', selector: 'adresa' },
    { name: 'Opis povrede', selector: 'opisPovrede' },
    { name: 'Opis Zivotinje', selector: 'opisZivotinje' },
    { name: 'Vrsta Zivotinje', selector: 'vrstaZivotinje' },
    { name: 'Slika', selector: 'slika' },
    { name: 'Urgentnost', selector: 'stepenUrgentnosti' },
    { name: 'Vasa Napomena', selector: 'vasaNapomena' },
];

class AdminPanel extends Component {
    state = {
        data: [],
        showButton: false,
        excelData: [],
        choosen: 'pristupnice'
    }

    componentDidMount() {
        axios.post("/pristupnice/get-by-token", { token: cookie.load('lev_token') })
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
        } catch (error) {
            console.log(error);
            this.props.alert.show("Doslo je do problema na serveru, kontaktirajte inzenjera", { type: "error" });
        }


        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet(excel_data);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    componentDidUpdate(routeData, newState) {
        if (newState.choosen !== this.state.choosen)
            this.getData();
    }

    getData() {
        let route = "";
        if (this.state.choosen === 'pristupnice') route = "/pristupnice";
        else route = "/prijave/get-all-from-admin";

        axios.post(route, { token: cookie.load('lev_token') })
            .then(response => {
                const { data } = response;

                this.setState({ data: data });

            }).catch(error => {
                this.setState({data: []})
                this.props.alert.show("Nemate permisije za ovaj sadrzaj!", { type: "error" });
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
        let file_name = month + ' ' + day + ' ' + year + "_PRISTUPNICE_LEVIJATAN";
        let columnPicker;
        if (this.state.choosen === 'pristupnice') columnPicker = columns;
        else columnPicker = columns2;
        return (
            <div>
                <h2 className="title-panel">lista qudi koji su popunili pristupnicu na sajtu</h2>
                <div className="button-wrapper" style={{ flexDirection: 'row' }}>
                    <button onClick={() => this.setState({ choosen: 'pristupnice' })}>Pristupnice</button>
                    <button onClick={() => this.setState({ choosen: 'prijave' })}>Prijave</button>
                </div>
                {this.state.showButton ? <a className="go-to-login" href="/admin">Login</a> : null}
                <div className="button-wrapper"><button onClick={() => this.exportToCSV(this.state.data, file_name)}>Export to excel</button></div>
                <DataTable
                    columns={columnPicker}
                    data={this.state.data}
                />
            </div>
        )
    }
}

export default withAlert()(AdminPanel);
