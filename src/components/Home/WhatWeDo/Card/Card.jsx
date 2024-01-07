import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="Card">
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
