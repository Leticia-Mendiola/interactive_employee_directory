import React from "react";

function Personnel(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name.last} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name.first} {props.name.last}
          </li>
          <li>
            <strong>Age:</strong> {props.dob.age}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Personnel;
