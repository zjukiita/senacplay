import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import api from '../../services/api';
import classes from './filmslist.module.css'
import imgLogo from '../../img/logo.jpg'

const FilmsList = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const loadingMovies = async () => {
        let response;
        if (search === '')
            response = await api.get(`/filmes`);
        else
            response = await api.get(`/filmes/nome/${search}`); //Chave de busca da API
        setMovies([]);
        if (response.data)
            setMovies(response.data);
    };

    useEffect(() => {
        loadingMovies();
    }, [search]);

    return (
        <>
            <nav className={classes.navBarSearch}>
                <div className={classes.listNavBar} style={{ paddingInline: 35 }}>
                    <img className={classes.imgLogo} src={imgLogo} width="50" height="50" />
                    <div>
                        <button className={classes.searchTab}>
                            <i class="fas fa-search"></i>
                            <input
                                className={classes.search}
                                id="search"
                                name="search"
                                type="text"
                                placeholder="Pesquisa"
                                value={search}
                                onChange={(e) => { setSearch(e.target.value) }}
                            />
                        </button>
                    </div>

                    <div className={classes.bars}>
                        <i class="fas fa-bars fa-2x"></i>
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
            </nav>
        </>
    );
}

export default FilmsList;