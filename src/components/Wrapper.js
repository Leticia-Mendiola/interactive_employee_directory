import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import PersonDetail from "./PersonDetail";
import API from "../utils/API";

class Wrapper extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchPeople("results=5000");
  }

  searchPeople = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchPeople(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              // heading={this.state.results.name || "Search for an Employee"}
            >
              {this.state.results.name.first ? (
                this.state.results.map(results => (
                <PersonDetail
                  first={this.state.results.name.first}
                  last={this.state.results.name.last}
                  src={this.state.results.picture.medium}
                  location={this.state.results.location.city}
                  dob={this.state.results.dob.age}
                  phone={this.state.results.phone}
                />))
              ) : (<h3>No Results to Display</h3>)
              }
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Wrapper;
