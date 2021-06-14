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
        name={results.name.first}
        image={results.picture.medium}
        age={results.dob.age}
        location={results.location.city}
        />))
      }
    </Wrapper>
  );
}

export default App;