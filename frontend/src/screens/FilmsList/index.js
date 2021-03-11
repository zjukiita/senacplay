import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import api from '../../services/api';
import classes from './filmslist.module.css'
import imgLogo from '../../img/logo.png'

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
                <div className={classes.listNavBar}>
                    <div className={classes.items} style={{ paddingInline: 35 }}>
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
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                                Categorias
                            </button>
                            <div class="dropdown-menu bg-secondary">
                                <a class="dropdown-item text-dark" href="#">Ação</a>
                                <a class="dropdown-item text-dark" href="#">Aventura</a>
                                <a class="dropdown-item text-dark" href="#">Comédia</a>
                            </div>
                        </div>
                    </div>

                    <h2>Seja muito bem-vindo(a)! Pegue uma pipoca e aproveite nossa lista de filmes! </h2>

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