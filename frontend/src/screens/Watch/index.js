import React, { useEffect, useState } from 'react';
import Movie from '../../components/WatchMovie';
import api from '../../services/api'
import classes from './watch.module.css'

const Watch = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const loadingMovies = async () => {
        let response;
        if (search === '')
            response = await api.get(`/filmes`)
        else
            response = await api.get(`/filmes/nome/${search}`); //Chave de busca da API
        setMovies([]);
        if (response.data)
            setMovies(response.data);
    }
    useEffect(() => {
        loadingMovies();
    }, [search]);
    return (
        <>
            
            <div className={classes.search}>
            <h4 class="text-white">Digite o nome do filme que seja assistir!</h4>
                <input
                    className={classes.input}
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Pesquisa"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            <div>
                {movies.map(m => {
                    return (
                        <div key={m.id}>
                            <Movie movie={m}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Watch;