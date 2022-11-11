import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import "../styles/Home.css";
import Header from "../components/Header";

const Home = () => {
  const { setSearch, movies, favoriteHandler } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-container">
      <Header> </Header>

      /<Input handleSearch={handleSearch} />
      {/* conditional rendering */}
      {movies?.length > 0 ? (
        <div className="movies">
          {movies?.map((movie) => {
            console.log(movie)
            return (
              <Link /*'movies/tt1201607'*/
                to={`${movie.id}`} /* Router.js dinamik path yapısıyla aynı olacak şekilde imdbID ile routing işlemini yapınız */
                className="text-link"
                key={movie.id}
              >
                <Card
                  key={movie.id}
                  image={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path}
                  title={movie.title}
                  
                  addFavorite={(e) => favoriteHandler(movie, e)}
                  isFavorite={movie.isFavorite}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="search-warning">
          <p>Search a movie!</p>
          <p>i.e. Harry Potter</p>
        </div>
      )}
    </div>
  );
};

export default Home;
