import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    return (
        <div className="row">
            {movies.length > 0 ? (
                movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
            ) : (
                <p className="text-center w-100">No movies found.</p>
            )}
        </div>
    );
};

export default MovieList;
