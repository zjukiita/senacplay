import React from 'react';
import { Link } from 'react-router-dom';
import classes from './moviecard.module.css';

const MovieCard = (props) => {
    return (
        <>
            <div className={classes.Card}>
                <img class="mt-5" src={props.movie.imagem} className={classes.images} alt={props.movie.nome} data-toggle="modal" data-target={`#${ props.movie.id }`} />
                <div className="modal fade" id={props.movie.id} >
                    <h3>{props.movie.nome}</h3>
                    <p><label>Ano: </label> {props.movie.anoDeLancamento}</p>
                    <p><label>Categoria: </label> {props.movie.categoria}</p>
                    <p><label>Sinopse: </label> {props.movie.sinopse}</p>
                    <p><label>Duração: </label> {props.movie.duracao}</p>
                    <p><label>Avaliação: </label> {props.movie.avaliacao}</p>
                    {/* <p><label>Links: </label> {props.movie.link}</p> */}
                </div>
            </div>
        </>
    )
}

export default MovieCard;
