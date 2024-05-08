import { useEffect, useState } from "react";
//import movies from "../movies.json";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useParams } from "react-router-dom";
import get from "../util/httpClient";


const MoviesGrid = () => {
  //const apiKey = "2f21f1684ac853790c8f99dc99ea1624";
  //const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

  //let movies = [];
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
   get("/discover/movie")
   .then((data) => {
     setMovies(data.results);
    });
  }, []);
     
  
  

  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
