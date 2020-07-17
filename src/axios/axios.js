import axios from 'axios';

const instance = axios.create({
    baseURL:  'https://lev-backend-office-x-x.herokuapp.com/api/' // http://localhost:5000/api/
})

export default instance;