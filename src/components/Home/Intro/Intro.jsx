import React from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.scss";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className="Intro">
      <div className="Inner_Div">
        <h1>
          INNOVATORS IN <br /> <span>STRUCTURAL ENGINEERING</span>
        </h1>
        <p>Catalyzing Your Vision: From Concept to Construction</p>
        <button
          onClick={() => {
            navigate("/contact-us");
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Intro;
