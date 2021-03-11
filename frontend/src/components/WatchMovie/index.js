import React from 'react';
import { Link } from 'react-router-dom';
import classes from './watch.modules.css'


const Movie = (props) => {
    return (
        <>
            <body className={classes.body}>
                <br />
                <h1 className={classes.titulo}>{props.movie.nome}</h1>
                <div className={classes.conteudo}>
                    <h6 className={classes.palavras}>Ano: {props.movie.anoDeLancamento}</h6>
                    <h6 className={classes.palavras}>Duração: {props.movie.duracao}</h6>
                    <h6 className={classes.palavras}>Avaliação: {props.movie.avaliacao}</h6>
                </div>
            </body>
        </>
    )

}

export default Movie;