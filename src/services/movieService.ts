
import axios from 'axios';
import type { Movie } from '../types/movie';
// import { useState } from 'react';

const myKey = import.meta.env.VITE_API_KEY;



interface MovieHttpResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}


export const fetchMovie = async (topic: string): Promise<Movie[]> => {
  const response = await axios.get<MovieHttpResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
    params: {
        query: topic,
        include_adult: false,
        language: "en-US",
        page: 1,
  },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${myKey}`,
  }
}
  );
  return response.data.results;
};
