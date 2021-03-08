import React from 'react';
import classes from './styles.module.css';

const MovieCard = (props) => {
    return (
        <>
            <div className={classes.searchPage}>
                <div className={classes.Card}>
                    <img src={props.cover} />
                    <div className={classes.titles}>
                        <h2>{props.title}</h2>
                        <p><label className={classes.titles}>Ano:</label> {props.release}</p>
                        <p><label className={classes.titles}>Tipo:</label> {props.type}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCard;
