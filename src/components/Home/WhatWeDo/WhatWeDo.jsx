import React, { useRef, useEffect } from "react";
import Card from "./Card/Card";
import { useNavigate } from "react-router-dom";
import "./WhatWeDo.scss";

const WhatWeDo = () => {
  const navigate = useNavigate();
  const heading = useRef(null);
  const divLeft = useRef(null);
  const divRight = useRef(null);

  const headingObserverCallback = (entries, headingObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("heading-animation");
        headingObserver.unobserve(entry.target);
      }
    });
  };
  const divLeftObserverCallback = (entries, divLeftObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("div-left-animation");
        divLeftObserver.unobserve(entry.target);
      }
    });
  };
  const divRightObserverCallback = (entries, divRightObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("div-right-animation");
        divRightObserver.unobserve(entry.target);
      }
    });
  };

  const headingObserverOptions = {
    rootMargin: "0px 0px -300px 0px",
    threshold: 1,
  };
  const divLeftObserverOptions = {
    threshold: 0.5,
  };
  const divRightObserverOptions = {
    threshold: 0.5,
  };

  const headingObserver = new IntersectionObserver(
    headingObserverCallback,
    headingObserverOptions
  );
  const divLeftObserver = new IntersectionObserver(
    divLeftObserverCallback,
    divLeftObserverOptions
  );
  const divRightObserver = new IntersectionObserver(
    divRightObserverCallback,
    divRightObserverOptions
  );

  useEffect(() => {
    headingObserver.observe(heading.current);
    divLeftObserver.observe(divLeft.current);
    divRightObserver.observe(divRight.current);
  });

  return (
    <div className="What_We_Do">
      <h2 ref={heading}>
        Leading Civil & Structural Engineering Company in India
      </h2>
      <div className="Inner_Div_WWD">
        <div className="ID_Left" ref={divLeft}>
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
        <div className="ID_Right" ref={divRight}>
          <Card heading="1K+" description="Completed Projects" />
          <Card heading="25+" description="Years Of Experience" />
          <Card heading="100+" description="Ongoing Projects" />
          <Card heading="20+" description="International Projects" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
