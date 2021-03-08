import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/', // <-- Inserir Link da API
});

export default api;