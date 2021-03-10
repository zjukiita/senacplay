import React, { useEffect, useState } from 'react';
import Movie from '../../components/WatchMovie';
import api from '../../services/api'

const Watch = () => {
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
            {/* <div>
                <img />
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
            </div> */}
            {movies.map(m => {
                return (
                    <div key={m.id}>
                        <Movie movie={m}
                        />
                    </div>
                );
            })}
        </>
    );
}

export default Watch;