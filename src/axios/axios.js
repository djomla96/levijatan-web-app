import axios from 'axios';

const instance = axios.create({
    baseURL:  'http://localhost:5000/api/' //'https://levijatan-backend.herokuapp.com/api'
})

export default instance;