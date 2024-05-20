import { useEffect, useState } from "react";
//import movies from "../movies.json";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import Spinner from "./Spinner";
import get from "../util/httpClient";
import useQuery from "../hooks/UseQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import Emtpy from "../components/Emtpy"


const MoviesGrid = (props) => {
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  
  
  

  useEffect(() => {
    setLoading(true);
    const searchUrl = search 
    ? "/search/movie?query=" + search + "&page=" + page
    : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setLoading(false);
    });
  }, [search, page]);


if(!loading && movies.length == 0){
  return <Emtpy/>
}

  return (
      <InfiniteScroll 
      dataLength={movies.length} 
      hasMore={hasMore} 
      next={()=> setPage((prevPage) => prevPage + 1 )}
      loader={<Spinner />}>
        
      <ul className={styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
    </InfiniteScroll>
  );
};

export default MoviesGrid;
