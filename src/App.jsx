import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route as Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <h1 className={styles.title}>Movies</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/movie">Movie</Link>
      </header>
      <main>
        <Routes>
            <Route exact path="/">Homee</Route>
            <Route path="/movie">homeee</Route>
        </Routes>
      </main>
    </Router>
  );
}

