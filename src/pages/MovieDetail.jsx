import React, { useEffect, useState } from "react";

import styles from "./MovieDetail.module.css";
import { useParams } from "react-router-dom";
import get from "../util/httpClient";


const MovieDetail = () => {
  const {movieId}= useParams();
  const [movie, setMovie] =useState(null)
 
  useEffect(()=> {
    get("/movie/" + movieId) 
    .then(data => {
      setMovie(data)
    });
  },[movieId]);

  if (!movie) {
    return null;
  }
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailConteiner}>
      <img 
      className={`${styles.columnas} ${styles.movieImage}`}
      src={imageUrl} 
      alt={movie.title} 
      />
      <div className={`${styles.columnas} ${styles.movieDetails}`}>
        <p>
          <strong>Title:</strong> {movie.title}{" "}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Descripccion:</strong> {movie.overview}{" "}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
