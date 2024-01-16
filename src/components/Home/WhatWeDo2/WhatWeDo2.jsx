import React, { useRef } from "react";
import Card from "./Card/Card";
import ResidentialBuilding from "./../../../assets/images/building.png";
import CommercialBuilding from "./../../../assets/images/commercial.png";
import Architect from "./../../../assets/images/architect.png";
import Retrofitting from "./../../../assets/images/retrofitting.png";
import Consultancy from "./../../../assets/images/conversation.png";
import SteelStructure from "./../../../assets/images/eiffel-tower.png";
import "./WhatWeDo2.scss";

const WhatWeDo2 = () => {
  const heading = useRef(null);
  const hr = useRef(null);
  const div = useRef(null);

  const headingObserverCallback = (entries, headingObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("heading-animation");
        headingObserver.unobserve(entry.target);
      }
    });
  };
  const hrObserverCallback = (entries, hrObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("hr-animation");
        hrObserver.unobserve(entry.target);
      }
    });
  };
  const divObserverCallback = (entries, divObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("div-animation");
        divObserver.unobserve(entry.target);
      }
    });
  };

  const headingObserverOptions = {
    rootMargin: "0px 0px -300px 0px",
    threshold: 1,
  };
  const hrObserverOptions = {
    rootMargin: "0px 0px -300px 0px",
    threshold: 1,
  };
  const divObserverOptions = {
    threshold: 0.5,
  };

  const headingObserver = new IntersectionObserver(
    headingObserverCallback,
    headingObserverOptions
  );
  const hrObserver = new IntersectionObserver(
    hrObserverCallback,
    hrObserverOptions
  );
  const divObserver = new IntersectionObserver(
    divObserverCallback,
    divObserverOptions
  );

  React.useEffect(() => {
    headingObserver.observe(heading.current);
    divObserver.observe(div.current);
    hrObserver.observe(hr.current);
  });

  return (
    <div className="What_We_Do2">
      <h2 ref={heading}>We Handle A Full Range Of Services</h2>
      <hr ref={hr} />
      <div className="Inner_Div" ref={div}>
        <Card heading="Residential Projects" imgPath={ResidentialBuilding} />
        <Card heading="Commercial Projects" imgPath={CommercialBuilding} />
        <Card heading="Steel Structure" imgPath={SteelStructure} />
        <Card heading="Analysis & Design" imgPath={Architect} />
        <Card heading="Retrofitting" imgPath={Retrofitting} />
        <Card heading="Consultancy" imgPath={Consultancy} />
      </div>
    </div>
  );
};

export default WhatWeDo2;
