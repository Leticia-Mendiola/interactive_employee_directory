import React from "react";

function PersonDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.name} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Location: {props.location}</h3>
      <h3>Date of Birth: {props.dob}</h3>
      <h3>Phone: {props.phone}</h3>
    </div>
  );
}

export default PersonDetail;
