import React from "react";
import "./WhatWeDo.scss";
import Card from "./Card/Card";
import { useNavigate } from "react-router-dom";

const WhatWeDo = () => {
  const navigate = useNavigate();
  return (
    <div className="What_We_Do">
      <h2>Leading Civil & Structural Engineering Company in India</h2>
      <div className="Inner_Div">
        <div className="ID_Left">
          <p>
            Shravani Consultant is one of the leading providers of structural
            design, structural inspection, non-destructive testing and
            construction management services to the industry. Our in-house
            capability of providing the complete gamut of structural engineering
            services has made us a preferred partner for industrial companies,
            contractors, corporates & architectural firms alike.
          </p>
          <button
            onClick={() => {
              navigate("/about-us");
            }}
          >
            Read More
          </button>
        </div>
        <div className="ID_Right">
          <Card heading="75K+" description="Completed Projects" />
          <Card heading="100+" description="Years Of Experience" />
          <Card heading="28" description="Ongoing Projects" />
          <Card heading="15" description="International Projects" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
