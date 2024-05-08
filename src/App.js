//import MoviesGrid from "./components/MoviesGrid";
import MovieDetail from "./pages/MovieDetail";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import styles from "./components/App.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
 
    <BrowserRouter>
      <header className="header">
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/movie/:movieId" element={<MovieDetail />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
    
  );
}

export default App;
