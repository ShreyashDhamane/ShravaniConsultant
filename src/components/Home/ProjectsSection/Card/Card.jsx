import React from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="Card4"
      onClick={() => {
        navigate("/projects");
      }}
    >
      <img src={props.src} alt="High Rise Building" />
      <h3>{props.heading}</h3>
    </div>
  );
};

export default Card;
