
import axios from 'axios';
import Movie from '../types/movie';

const myKey = import.meta.env.VITE_API_KEY;

const config = {
    params: {
    query,
  },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${myKey}`,
  }
};

export default async function fetchMovies(query, page = 1): Promise<Movie> {
    try {
        const res = await axios.get<Movie[]>('https://api.themoviedb.org/3/search/movie', config);
        return res.data;
    } catch (err) {
        return (err);
    }
}
