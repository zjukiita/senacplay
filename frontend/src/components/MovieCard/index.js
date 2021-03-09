import React from 'react';
import classes from './styles.module.css';

const MovieCard = (props) => {
    return (
        <div className={classes.Card}>
            <img src={props.movie.imagem} width="360" height="530" alt={props.movie.nome} />
            <div className={classes.titles}>
                <h2>{props.movie.nome}</h2>
                <p><label>Ano: </label> {props.movie.anoDeLancamento}</p>
                <p><label>Categoria: </label>{props.movie.categoria}</p>
            </div>
        </div>
    )
}

export default MovieCard;
