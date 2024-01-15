import React from "react";
import Project1 from "./../../assets/images/buildings/Picture1.jpg";
import Project2 from "./../../assets/images/buildings/Picture2.jpg";
import Project3 from "./../../assets/images/buildings/Picture3.jpg";
import Project4 from "./../../assets/images/buildings/Picture4.jpg";
import Project5 from "./../../assets/images/buildings/Picture5.jpg";
import Project6 from "./../../assets/images/buildings/Picture6.jpg";
import Project7 from "./../../assets/images/buildings/Picture7.jpg";
import Project8 from "./../../assets/images/buildings/Picture8.jpg";
import Project9 from "./../../assets/images/buildings/Picture9.jpg";
import Project10 from "./../../assets/images/buildings/Picture10.jpg";
import Project11 from "./../../assets/images/buildings/Picture11.jpg";
import Project12 from "./../../assets/images/buildings/Picture12.jpg";
import Project13 from "./../../assets/images/buildings/Picture13.jpg";
import Project14 from "./../../assets/images/buildings/Picture14.jpg";
import Project15 from "./../../assets/images/buildings/Picture15.jpg";
import Project16 from "./../../assets/images/buildings/Picture16.jpg";
import Project17 from "./../../assets/images/buildings/Picture17.jpg";
import Project18 from "./../../assets/images/buildings/Picture18.jpg";
import Project19 from "./../../assets/images/buildings/Picture19.jpg";
import Project20 from "./../../assets/images/buildings/Picture20.jpg";
import Project21 from "./../../assets/images/buildings/Picture21.jpg";
import Project22 from "./../../assets/images/buildings/Picture22.jpg";
import Project23 from "./../../assets/images/buildings/Picture23.jpg";
import Project24 from "./../../assets/images/buildings/Picture24.jpg";
import Project25 from "./../../assets/images/buildings/Picture25.jpg";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="Projects_Page">
      <div className="Gallery_Container">
        <div className="big">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={Project1} alt="Avatar" />
              </div>
              <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="big">
          <img src={Project1} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project4} alt="Projects" />
        </div>
        <div className="big">
          <img src={Project20} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project3} alt="Projects" />
        </div>
        <div>
          <img src={Project24} alt="Projects" />
        </div>
        <div>
          <img src={Project25} alt="Projects" />
        </div>
        <div className="big">
          <img src={Project19} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project5} alt="Projects" />
        </div>
        <div className="big">
          <img src={Project7} alt="Projects" />
        </div>
        <div className="big">
          <img src={Project23} alt="Projects" />
        </div>
        <div className="big">
          <img src={Project9} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project2} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project6} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project8} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project10} alt="Projects" />
        </div>
        <div>
          <img src={Project11} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project12} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project13} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project14} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project15} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project16} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project17} alt="Projects" />
        </div>
        <div className="tall">
          <img src={Project18} alt="Projects" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
