import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import results from "./results.json";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

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
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
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
    );
  }
}

export default Search;

function App() {
  return (
    <Wrapper>
      <Title>Employees</Title>
      { results.map(results => (
        <EmployeeCard
        first={results.name.first}
        last={results.name.last}
        image={results.picture.large}
        age={results.dob.age}
        city={results.location.city}
        state={results.location.state}
        nat={results.nat}
        email={results.email}
        phone={results.phone}
        />))
      }
    </Wrapper>
  );
}

export default App;