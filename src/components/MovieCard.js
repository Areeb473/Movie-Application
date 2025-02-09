import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text"><strong>Year:</strong> {movie.Year}</p>
                    <p className="card-text"><strong>Type:</strong> {movie.Type}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
