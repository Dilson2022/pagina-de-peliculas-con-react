import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import styles from "./MovieDetail.module.css";
import { useParams } from "react-router-dom";
import get from "../util/httpClient";



const MovieDetail = () => {
  const {movieId}= useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] =useState(null)
 
  

  useEffect(()=> {
    setLoading(true);
    get("/movie/" + movieId) 
    .then(data => {
      setLoading(false)
      setMovie(data)
    });
  },[movieId]);

  if (loading) {
    return (
      <div>
        <Spinner/>
      </div>
    )
  }

  // if (!movie) {
  //   return null;
  // }

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
