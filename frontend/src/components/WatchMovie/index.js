import React from 'react';
import { Link } from 'react-router-dom';
import classes from './filme.module.css';


const Movie = (props) => {
    return (
        <>
            <body className={classes.body} id={props.movie.id}>
                <br />
                <div className={classes.main_content}>
                    <h1 className={classes.titulo}>{props.movie.nome}</h1>
                    <div className={classes.conteudo}>
                        <h6 className={classes.palavras}>Ano: {props.movie.anoDeLancamento}</h6>
                        <h6 className={classes.palavras}>Duração: {props.movie.duracao}</h6>
                        <h6 className={classes.palavras}>Avaliação: {props.movie.avaliacao}</h6>
                        <a href={props.movie.link}><button className={classes.button}>Assistir</button></a>
                    </div>
                </div>
            </body>
            <hr class="divisor p-2 mt-0 mb-0" />
        </>
    )

}

export default Movie;