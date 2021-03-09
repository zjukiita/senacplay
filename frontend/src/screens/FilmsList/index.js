import React, { useEffect, useState } from 'react';
import GlobalMenu from '../../components/GlobalMenu';
import MovieCard from '../../components/MovieCard';
import api from '../../services/api';
import classes from './styles.module.css'
import imgLogo from '../../img/exampleImg.jpg'

const FilmsList = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const loadingMovies = async () => {
        const response = await api.get(`/filmes`); //Chave de busca da API
        setMovies([]);
        if (response.data.Search)
            setMovies(response['data'].Search);
    }

    useEffect(() => {
        loadingMovies();
    }, [search]);

    return (
        <>
            <GlobalMenu />
            <div style={{display: 'flex', justifyContent: 'space-between', paddingInline: 20, alignItems: 'center'}}>
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

            <div className={classes.pageFilmsList}>
                <div class="container-fluid" className={classes.searchPage}>
                    <div className={classes.listFilms}>
                        <ul>
                            {movies.map(m => {
                                return (
                                    <li key={m.imdbID}>
                                        <MovieCard
                                            cover={m.Poster}
                                            title={m.Title}
                                            release={m.Year}
                                            type={m.Type}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilmsList;