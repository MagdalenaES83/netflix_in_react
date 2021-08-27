import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";

export default class MyCarouselMovie extends Component {
  state = { selected: false };
  render() {
    return (
      <Col xs={12}  md={4} lg={3}  className="mb-3">
        <Card>
          <Card.Img
            onClick={() => this.setState({ selected: !this.state.selected })}
            className="d-block img-fluid"
            src={this.props.movie.Poster}
            
          /> <Card.Title>{this.props.movie.Title}</Card.Title>
        </Card>
      </Col>
    );
  }
}
