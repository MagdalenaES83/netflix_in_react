import { Component } from "react";
import "../style/style.css";

class MovieCard extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <div className="col-sm-6 col-md-4 col-xl-2 px-1">
        <div className="card">
          <img
            src={this.props.movie.Poster}
            className="card-img-top img-fluid"
            alt="..."
          />
          <span style={{ display: "none" }}>{this.props.movie.Title}</span>
        </div>
      </div>
    );
  }
}

export default MovieCard;
