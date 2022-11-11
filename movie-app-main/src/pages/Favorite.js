import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Card from '../components/Card';
import Header from '../components/Header';
import '../styles/Favorite.css';



const Favorite = () => {
  const { favorites, favoriteHandler } = useContext(MovieContext);

  return (
    
    <>
    <Header> </Header>
      {favorites?.length ? (
        <div className='favorites'>
          {favorites.map((movie) => (
            <Card
              key={movie.id}
              image={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              addFavorite={(e) => favoriteHandler(movie, e)}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>
      ) : (
        <div className='favorite_warning'> There is no favorite movie.</div>
      
      )}
      
    </>
  );
};

export default Favorite;
