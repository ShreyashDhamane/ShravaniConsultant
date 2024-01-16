import React, { useRef, useEffect } from "react";
import Founder from "./../../../assets/images/bahubali_dhamane.jpg";
import "./About.scss";

const About = () => {
  const div = useRef(null);

  const divObserverCallback = (entries, divObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("about-animation");
        divObserver.unobserve(entry.target);
      }
    });
  };

  const divObserverOptions = {
    threshold: 0.3,
  };

  const divObserver = new IntersectionObserver(
    divObserverCallback,
    divObserverOptions
  );

  useEffect(() => {
    divObserver.observe(div.current);
  });

  return (
    <div className="About_Section" ref={div}>
      <img
        src={Founder}
        alt="Bahubali Dhamane, Founder and Leader of Shravani Consultant, overseeing a structural design project"
      />
      <h3>Bahubali Dhamane</h3>
      <h4>Founder</h4>
      <hr />
      <p>
        Bahubali Dhamane has an experience of designing a wide variety of
        structures including residential & commercial buildings, industrial
        plants, temporary structures and telecom towers. Some of his recent work
        includes design of nuclear power plant structures, wind & solar power
        plants and cargo complex for Mumbai Airport.
      </p>
    </div>
  );
};

export default About;
