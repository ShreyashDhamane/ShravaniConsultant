import React from "react";
import Career from "./../../assets/images/career.jpg";
import "./Careers.scss";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="Careers">
      <div className="Careers_Left">
        <h1>Careers</h1>
        <h2>Work At Shravani Consultant</h2>
        <hr />
        <p>
          At Shravani Consultant we believe that learning is an essential
          ingredient to growth which is why we focus on employee learning all
          the time. Not only do we have training sessions to continuously impart
          new skills and add value to the employees, but also give cross
          functional duties to help them learn outside their own functional
          areas. We give flexibility for change, the opportunity to work on
          different projects, providing diverse career options.
        </p>
        <p>
          With the freedom and responsibility that is awarded to our people
          early in their career, leadership comes naturally to them. We review
          capabilities continuously and nurture leaders who are ready to take a
          greater role in the organization.
        </p>
        <p>
          Unlike many others, we continuously evolve our processes to stay at
          the cutting edge of technology. We don't believe in just completing
          tasks, we believe in completing them most efficiently and in the best
          manner. Don't be surprised if you are working using technologies and
          on projects that others find things of the next generation.
        </p>
        <button
          onClick={() => {
            navigate("/contact-us");
          }}
        >
          Contact Us
        </button>
      </div>
      <div className="Careers_Right">
        <img src={Career} alt="" />
      </div>
    </div>
  );
};

export default Careers;
