// import './App.css';
// import React from "react";
// import Home from "./pages/home";

// function App() {
//   return <Home />;
// }

// export default App;

import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
import results from "./results.json";

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
        />))
      }
    </Wrapper>
  );
}

export default App;