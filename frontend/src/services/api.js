import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.omdbapi.com', // <-- Inserir Link da API
});

export default api;