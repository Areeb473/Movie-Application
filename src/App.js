import React, { useState } from "react";
import { fetchMovies } from "./api";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query.trim() === "") return;

        const data = await fetchMovies(query, 1);
        if (data.Response === "True") {
            setMovies(data.Search);
            setTotalResults(parseInt(data.totalResults));
            setPage(1);
            setError("");
        } else {
            setMovies([]);
            setError(data.Error);
        }
    };

    const loadMore = async () => {
        const nextPage = page + 1;
        const data = await fetchMovies(query, nextPage);
        if (data.Response === "True") {
            setMovies([...movies, ...data.Search]);
            setPage(nextPage);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center mt-4">🎬 Movie Search App</h1>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="input-group my-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            {/* Display Error */}
            {error && <p className="text-danger text-center">{error}</p>}

            {/* Movie List */}
            <MovieList movies={movies} />

            {/* Load More Button */}
            {movies.length > 0 && movies.length < totalResults && (
                <div className="text-center mt-3">
                    <button className="btn btn-secondary" onClick={loadMore}>Load More</button>
                </div>
            )}
        </div>
    );
};

export default App;
