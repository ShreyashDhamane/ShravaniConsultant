import React, { useRef, useEffect } from "react";
import Card from "./Card/Card";
import Commitment from "./../../../assets/images/commitment.png";
import Excellence from "./../../../assets/images/quality.png";
import Innovation from "./../../../assets/images/bulb.png";
import "./Philosophy.scss";

const Philosophy = () => {
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

  useEffect(() => {
    headingObserver.observe(heading.current);
    divObserver.observe(div.current);
    hrObserver.observe(hr.current);
  });

  return (
    <div className="Philosophy">
      <h2 ref={heading}>Our Philosophy</h2>
      <hr ref={hr} />
      <div className="Inner_div" ref={div}>
        <Card
          src={Commitment}
          heading="Commitment"
          alt="Commitment"
          description="We are committed to providing a world-class customer experience. Our team is made up of highly professional people who approach work with integrity and always seek to add value to the clients. We seek to build strong, long-term relationships with our clients by understanding their needs."
        />
        <Card
          src={Excellence}
          heading="Excellence"
          alt="Excellence"
          description="It is our policy to maintain the high standards that we started with. We do not compromise on quality in any area of our business. Whether it is hiring new people or working on a client’s project, we thrive on excellence. With our well structured internal quality control procedures."
        />
        <Card
          src={Innovation}
          heading="Innovation"
          alt="Innovation"
          description="The spirit of innovation is ingrained in our culture. We are always looking to provide value added services to our clients which are based on latest cutting edge technologies. Some examples include using drones for inspections or using advanced scanners for preparation of as-built drawings."
        />
      </div>
    </div>
  );
};

export default Philosophy;
