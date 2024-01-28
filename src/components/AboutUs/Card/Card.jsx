import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="Card_About_Us">
      <img src={props.src} alt={props.alt} />
      <h3>{props.name}</h3>
      <h4>{props.role}</h4>
      <h5>{props.degree}</h5>
    </div>
  );
};

export default Card;
