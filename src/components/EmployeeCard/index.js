import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.first,props.last} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.first} {props.last}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
          <li>
            <strong>Location:</strong> {props.city} {props.state}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
