import React, { useRef } from "react";
import Project1 from "./../../../assets/images/project1.png";
import Project2 from "./../../../assets/images/project2.jpg";
import Project3 from "./../../../assets/images/project3.jpg";
import "./Projects.scss";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const circle = useRef(null);
  const onMouseMove = (e) => {
    const containerRect = circle.current.parentElement.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left - 75;
    const offsetY = e.clientY - containerRect.top - 75;
    circle.current.style.display = "flex";
    circle.current.style.left = offsetX + "px";
    circle.current.style.top = offsetY + "px";
  };

  const onMouseLeave = () => {
    circle.current.style.display = "none";
    circle.current.style.left = "0px";
    circle.current.style.top = "0px";
  };

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <div className="Projects">
      <h2>Our Projects</h2>
      <hr />
      <div className="Inner_Div3" onClick={handleClick}>
        <div
          className="Image_Gallery_Row1"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <img src={Project1} alt="our projects"></img>
          <img src={Project2} alt="our projects"></img>
          <img src={Project3} alt="our projects"></img>
        </div>
        <div
          className="Image_Gallery_Row2"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <img src={Project1} alt="our projects"></img>
          <img src={Project2} alt="our projects"></img>
        </div>
        {/* <div className="Image_Gallery_Row3">
          <img src={Project3} alt="our projects"></img>
        </div> */}
        <div className="Hover_Circle" ref={circle}>
          View
        </div>
      </div>
    </div>
  );
};

export default Projects;
