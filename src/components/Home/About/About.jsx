import React from "react";
import Founder from "./../../../assets/images/founder.png";
import "./About.scss";

const About = () => {
  return (
    <div className="About_Section">
      <img src={Founder} alt="Founder: Bahubali Dhamane" />
      <h3>Bahubali Dhamane</h3>
      <h4>Founder</h4>
      <hr />
      <p>
        Bahubali has an experience of designing a wide variety of structures
        including residential & commercial buildings, industrial plants,
        temporary structures and telecom towers. Some of his recent work
        includes design of nuclear power plant structures, wind & solar power
        plants and cargo complex for Mumbai Airport.
      </p>
    </div>
  );
};

export default About;
