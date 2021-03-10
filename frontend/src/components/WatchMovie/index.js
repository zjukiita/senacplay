import React from 'react';
import { Link } from 'react-router-dom';


const Movie = (props) => {
    return (
        <>
            <div>
                <div>
                    <h3>{props.movie.nome}</h3>
                    <p><label>Ano: </label> {props.movie.anoDeLancamento}</p>
                    <p><label>Categoria: </label> {props.movie.categoria}</p>
                    <p><label>Duração: </label> {props.movie.duracao}</p>
                    <p><label>Avaliação: </label> {props.movie.avaliacao}</p>
                    <p><label>Trailer: </label> {props.movie.trailer}</p>
                </div>
            </div>
        </>
    )
}

export default Movie;