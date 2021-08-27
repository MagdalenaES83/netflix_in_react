import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import CardRow from "./CardRow";
import "../style/home.css";

class Home extends Component {
  state = {
    mirror: [],
    lordOfTheRings: [],
    searchValue: "",
  };

  fetchMovies = async (search, movieSection, e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=7b58e915&s=" + search
      );

      const parsedResponse = await response.json();
      const movies = parsedResponse.Search;

      if (response.ok) {
        this.setState({ [movieSection]: movies });
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchMovies("black mirror", "mirror");
    this.fetchMovies("lord of the rings", "lordOfTheRings");
  };

  render() {
    return (
      <Container id="body">
        <CardRow rowTitle="Black Mirror" movies={this.state.mirror} />
        <CardRow
          rowTitle="Lord Of the Rings"
          movies={this.state.lordOfTheRings}
        />
      </Container>
    );
  }
}

export default Home;
