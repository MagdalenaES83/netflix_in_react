import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  state = {
    comment: [],
  };

  render() {
    return (
      <div className="container mt-3">
        <h3>{this.props.movieTitle}</h3>
        <div className="row mx-n1 action">
          {this.props.movies.length > 0 &&
            this.props.movies.map(
              (movie, i) =>
                i < 6 && <MovieCard key={movie.imdbID} movie={movie} />
            )}
        </div>
      </div>
    );
  }
}

export default MovieList;
