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
import FriendCard from "./components/FriendCard";
import results from "./results.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      { results.map(results => (
        <FriendCard
        name={results.results.name.first}
        image={results.results.picture.medium}
        age={results.results.dob.age}
        location={results.results.location.city}
        />))
      }
    </Wrapper>
  );
}

export default App;