import axios from 'axios';

const instance = axios.create({
    baseURL:  'https://levijatan-backend.herokuapp.com/api/' // http://localhost:5000/api/
})

export default instance;