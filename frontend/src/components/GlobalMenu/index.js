import React from 'react';
import { Link } from 'react-router-dom'
import classes from './styles.module.css'


function GlobalMenu() {
    return (
        <nav>
            <Link to="/">Página Principal</Link>
            <Link to="/filmsList">Lista de Filmes</Link>
            <Link to="/register">Cadastro</Link>
            <Link to="/Login">Login</Link>
        </nav>
    );
}

export default GlobalMenu;