import React, { Component } from "react";

import { Col, Card, Row, Container } from "react-bootstrap";

export default class CardRow extends Component {
  state = {
    
  };
  fetchMovies = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=7b58e915&s=" + this.props.searchQuery
      );
      const fetchedMovies = await response.json();
      this.setState({ movies: fetchedMovies.Search });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    return (
      <Container>

      {/* <h4>{this.props.rowTitle}</h4> */}
      <Row className="mt-5"> 
        {this.props.movies
        
        .slice(0,6)  
        .map((movie) => (
          <Col  key={movie.imdbID}>
        
              <Card.Img
                className="mb-1, bg-transparent posters"
                variant="top"
                src={movie.Poster}

              />
              {/* <Card.Text className="p-1">{movie.Title}</Card.Text> */}
        
          </Col>
        ))}
      </Row>


    </Container>
    );
  }
}
