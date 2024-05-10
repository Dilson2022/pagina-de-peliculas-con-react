import { useEffect, useState } from "react";
//import movies from "../movies.json";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import Spinner from "./Spinner";
import get from "../util/httpClient";
import useQuery from "../hooks/UseQuery";



const MoviesGrid = () => {
  //const apiKey = "2f21f1684ac853790c8f99dc99ea1624";
  //const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

  //let movies = [];
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  console.log(search);
  

  useEffect(() => {
    setLoading(true);
    const searchUrl = search 
    ? "/search/movie?query=" + search 
    : "/discover/movie";
    get(searchUrl).then((data) => {
      setLoading(false);
      setMovies(data.results);
    });
  }, [search]);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
