import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import api from '../../services/api';
import classes from './filmslist.module.css'
import imgLogo from '../../img/exampleimg.jpg'

const FilmsList = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const loadingMovies = async () => {
        const response = await api.get(`/filmes`); //Chave de busca da API
        setMovies([]);
        if (response.data)
            setMovies(response.data);
    }

    useEffect(() => {
        loadingMovies();
    }, []);

    return (
        <>
            <div className={classes.body}>
                <div className={classes.listNavBar} style={{ paddingInline: 20 }}>
                    <img className={classes.imgLogo} src={imgLogo} width="50" height="50" />
                    <div>
                        <input
                            id="search"
                            name="search"
                            type="text"
                            placeholder="Pesquisa"
                            value={search}
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                    </div>
                    <div className={classes.bars}>
                        <i class="fas fa-bars fa-3x"></i>
                    </div>
                </div>
                <div className={classes.list}>
                    {movies.map(m => {
                        return (
                            <div key={m.id}>
                                <MovieCard movie={m}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default FilmsList;