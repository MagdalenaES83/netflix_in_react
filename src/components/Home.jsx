import React, { Component } from "react";
import { Container, Row, Col, Form, Button, FormControl } from "react-bootstrap";

import CardRow from "./CardRow";
import "../style/home.css";

class Home extends Component {
  state = {
    mirror: [],
    lordOfTheRings: [],
    harry : [],
    bad :[],
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

  updateSearchState = (value) => {
    this.setState({ searchValue: value })
  }


  componentDidMount = () => {
    this.fetchMovies("black mirror", "mirror");
    this.fetchMovies("breaking bad", "bad");
    this.fetchMovies("lord of the rings", "lordOfTheRings");
    this.fetchMovies("harry potter", "harry");
  };

  render() {
    return (
      <Container id="body">
<Container fluid id="search-area">
        <Row className="pl-2 w-100 justify-content-between align-items-center">
          <Col xm={12} sm={8} md={6} lg={5} className="d-flex">
            <h3 className="mr-3 text-nowrap">Search</h3>
            <form
              onSubmit={(e) =>
                this.fetchMovies(this.state.searchValue, "stateMovies", e)
              }
              className="d-flex"
            >
              <Form.Control
                className="mr-2"
                type="text"
                placeholder="Search"
                value={this.state.search}
                onChange={(e) => this.updateSearchState(e.currentTarget.value)}
              />
              <Button type="submit" variant="secondary">
                Search
              </Button>
            </form>
          </Col>
          <Col
            sm={3}
            md={2}
            id="div-Icons"
            className="col d-none d-sm-flex justify-content-end"
          >
            <div className="d-inline-block">
              
            </div>
          </Col>
        </Row>
        <Row className="mt-4 pl-2" id="searchedMovies">
          {/* <CardRow
            rowTitle="Searched Movies"
            movies={this.state.stateMovies}
            searchQuery={this.state.searchValue}
          />
          <CardRow rowTitle="Marvel" movies={this.state.marvelMovies} />
          <CardRow rowTitle="Dc" movies={this.state.dcMovies} />
          <CardRow
            rowTitle="Star Wars"
            movies={this.state.starWarsMovies}
          /> */}
        </Row>
      </Container>


        <h4 className='mt-5'>Lord Of The Rings</h4>
<CardRow
          rowTitle="Lord Of the Rings"
          movies={this.state.lordOfTheRings}
        />
        <h4 className='mt-5'>Breaking Bad</h4>
        <CardRow rowTitle="Breaking Bad" movies={this.state.bad} />{" "}
        <h4 className='mt-5'>Harry Potter</h4>
        <CardRow rowTitle="Harry Potter" movies={this.state.harry} />{" "}
        <h4 className='mt-5'>Black Mirror</h4>
        <CardRow rowTitle="Black Mirror" movies={this.state.mirror} />{" "}
        
      </Container>
    );
  }
}

export default Home;
