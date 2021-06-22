import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
// import Search from "./components/Search";
import results from "./results.json";

function App() {
  return (
    <Wrapper>
      {/* <Search /> */}
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