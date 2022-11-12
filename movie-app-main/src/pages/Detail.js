import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { MovieContext } from "../context/MovieContext";

import noImage from "../utils/no-image-available.png";
import "../styles/Detail.css";
import Header from "../components/Header";

function addListItem(items){
  const listItems = items.map((item) =>
  <div>
  <p className="label-p">{item.name}</p>
  </div>
);
return listItems

}

const Detail = () => {
  let { id } = useParams();
  const { showDetail, selectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail(id); 
  }, []);

  console.log(showDetail)
  console.log(selectedMovie)
  // consol

  console.log(selectedMovie)
  if (selectedMovie){

    const genres = selectedMovie.genres;
    const companies = selectedMovie.production_companies;
    const languages = selectedMovie.spoken_languages;
    console.log(genres)
    console.log(companies)
    console.log(languages)



    return (
      <div>
        <Header></Header>
      <div className="detail-container">
        <div className="poster">
          {selectedMovie.poster_path === "N/A" ? (
            <img src={noImage} alt={selectedMovie.title} />
          ) : (
            <img src={"https://image.tmdb.org/t/p/w500/" + selectedMovie.poster_path} alt={selectedMovie.Title} />
          )}
        </div>
        <div className="info">
          <div className="field">
            <div className="label">
              <p className="title label-p">{selectedMovie.title}</p>
            </div>
          </div>
          <div className="field">
            <div className="label">
              <p className="label-p">{selectedMovie.overview}</p>
            </div>
          </div>
          <div className="field">
            <div className="label">
              Released: <p className="label-p">{selectedMovie.release_date}</p>
            </div>
          </div>
          <div className="field">
            <div className="label">
              Runtime: <p className="label-p">{selectedMovie.runtime}</p>
            </div>
          </div>
          <div className="field">
            <div className="label">
              Genre:
              <br></br>
              <ul>{addListItem(genres)}</ul>
            </div>
          </div>
          <div className="field">
            <div className="label">
              Production Companies(s): 
              <br></br>
              <ul>{addListItem(companies)}</ul>
            </div>
          </div>
          <div className="field">
            <div className="label">
              Language(s):
              <br></br>
              <ul>{addListItem(languages)}</ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    );

  } else{
    return(<div><h1>Not Found</h1></div>)
  }
 
};

export default Detail;
