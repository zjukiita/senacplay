import React from 'react';
import classes from './moviecard.module.css';

const MovieCard = (props) => {
    return (
        <div className={classes.Card}>
            <a src={props.movie.link}><img src={props.movie.imagem} width="360" height="530" /* alt={props.movie.nome} */ /></a>
            <div class="container-fluid" className={classes.words}>
                <h2>{props.movie.nome}</h2>
                <p><label>Ano: </label> {props.movie.anoDeLancamento}</p>
                <p><label>Categoria: </label> {props.movie.categoria}</p>
                <p><label>Sinopse: </label> {props.movie.sinopse}</p>
                <p><label>Duração: </label> {props.movie.duracao}</p>
                <p><label>Avaliação: </label> {props.movie.avaliacao}</p>
                <p><label>Links: </label> {props.movie.link}</p>
            </div>
        </div>
    )
}

export default MovieCard;
