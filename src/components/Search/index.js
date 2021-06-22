import React, { Component } from "react";
import results from "../../results.json";
import Container from "../Container";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import Alert from "../Alert";

class Search extends Component {
    state = {
      search: "",
      city: [],
      results: [],
      error: ""
    };
  
    // When the component mounts, get a list of all available cities and update this.state.city
    componentDidMount = () => {
      this.setState({ city: results.location.city })
      this.catch(err => console.log(err));
    }
  
    handleInputChange = event => {
      this.setState({ search: event.target.value });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      this.state.search
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          this.setState({ results: res.data.message, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
        return(
        <div>
            <Container style={{ minHeight: "80%" }}>
            <h1 className="text-center">Search By Breed!</h1>
            <Alert
                type="danger"
                style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
            >
                {this.state.error}
            </Alert>
            <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                breeds={this.state.breeds}
            />
            <SearchResults results={this.state.results} />
            </Container>
        </div>
        )
    };
  }
  
  export default Search;