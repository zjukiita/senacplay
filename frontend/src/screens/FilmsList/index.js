import React, { useEffect, useState } from 'react';
import GlobalMenu from '../../components/GlobalMenu';
import MovieCard from '../../components/MovieCard';
import api from '../../services/api';
import classes from './styles.module.css'


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
            <ul>
                {movies.map(m => {
                    return (
                        <li key={m.id}>
                            <MovieCard movie={m}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default FilmsList;