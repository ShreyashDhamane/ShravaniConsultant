import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="Card3">
      <img src={props.src} alt={props.alt} />
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
