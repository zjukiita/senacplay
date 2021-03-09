import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import api from '../../services/api';
import classes from './filmslist.module.css'

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
                <h1>Lista de Filmes</h1>
                <div>
                    <label htmlFor="search">Pesquisar:</label>
                    <input
                        id="search"
                        name="search"
                        type="text"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
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