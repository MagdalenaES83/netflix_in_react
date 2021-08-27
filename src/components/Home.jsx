import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import CustomCarousel from "./CustomCarousel";
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
      <Container fluid id="search-area">
        <Row className="pl-2 w-100 justify-content-between align-items-center">
          <Col xm={12} sm={8} md={4} lg={2} className="d-flex"></Col>

          <CustomCarousel rowTitle="Black Mirror" movies={this.state.mirror} />

          <CustomCarousel
            rowTitle="Lord Of the Rings"
            movies={this.state.lordOfTheRings}
          />
        </Row>
      </Container>
    );
  }
}

export default Home;
