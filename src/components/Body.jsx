import { Component } from "react";
import { Form } from "react-bootstrap";
import MovieList from "./MovieList";

class Body extends Component {
  state = {
    movies: [],
    searchMovie: "",
    comment: [],
  };

  movieTitle = [
    "Harry Potter",
    "Lord of the Rings",
    "Pirates of the Caribbean",
  ];

  getMovie = async (movie) => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=96b951ba&s=" + movie
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ movies: [...this.state.movies, data.Search] });
        console.log(this.state.movies);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.movieTitle.forEach(async (element) => {
      await this.getMovie(element);
    });
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group>
            <Form.Label>Search book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the movie that you want to search"
              value={this.state.searchMovie}
              onChange={(e) => this.setState({ searchMovie: e.target.value })}
            />
          </Form.Group>
        </Form>
        <div style={{ marginTop: "20px" }}>
          {this.state.movies.length > 0 &&
            this.state.movies
              //   .filter((movie) =>
              //     movie.Title.toLowerCase().includes(this.state.searchMovie)
              //   )
              .map((movie, i) => (
                <MovieList
                  key={this.movieTitle[i]}
                  movies={movie}
                  movieTitle={this.movieTitle[i]}
                />
              ))}
        </div>
      </>
    );
  }
}

export default Body;
