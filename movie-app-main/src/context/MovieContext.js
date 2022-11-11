import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext();



const API_KEY = '00b5c5b3096b059e5d558bff7ca71227'; // OMDb API Key

const MovieApp = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');


  //This method is when the search bar is triggered
  const fetchMovies = async (searchValue) => {
    const response = await axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );

    const queriedMovies = [];
    
    const data = response.data;
    data.results.forEach(m => { 
      if (m.title.includes(searchValue)){
        queriedMovies.push(m)
      }
    });
    console.log(queriedMovies);
    setMovies(queriedMovies);
  };

  // This method will be use to display all the movies, when there is no search text on the search bar
  const fetchAllMovies = async () => {
    const response = await axios(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );

    const data = response.data;
    console.log(data);
    setMovies(data.results);
  };


  const removeFavoriteMovie = (movie) => {
    movie.isFavorite = false;
    const newFavoriteList = favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
  };

  const addFavoriteMovie = (movie) => {
    movie.isFavorite = true;
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };

  const favoriteHandler = (movie, e) => {
    e.preventDefault();
    if (favorites.includes(movie)) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  };

  const showDetail = async (id) => {
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    const data = response.data;
    setSelectedMovie(data);
  };

  useEffect(() => {
    console.log(API_KEY)
    if (search != ""){
      fetchMovies(search);
    }else{
      fetchAllMovies();
    }
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
       setSearch,
        movies,
        favorites,
        favoriteHandler,
        showDetail,
        selectedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
