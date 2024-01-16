import React, { useRef, useEffect } from "react";
import Project1 from "./../../../assets/images/buildings/Picture19.jpg";
import Project2 from "./../../../assets/images/buildings/Picture14.jpg";
import Project3 from "./../../../assets/images/buildings/Picture6.jpg";
import Project4 from "./../../../assets/images/buildings/Picture1.jpg";
import Project5 from "./../../../assets/images/buildings/Picture24.jpg";
import { useNavigate } from "react-router-dom";
import "./Projects.scss";

const Projects = () => {
  const navigate = useNavigate();
  const circle = useRef(null);
  const heading = useRef(null);
  const hr = useRef(null);
  const div = useRef(null);

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
    <div className="Projects">
      <h2 ref={heading}>Our Projects</h2>
      <hr ref={hr} />
      <div className="Inner_Div3" onClick={handleClick} ref={div}>
        <div
          className="Image_Gallery_Row1"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <img src={Project1} alt="Bahubali Dhamane"></img>
          <img src={Project2} alt="Bahubali Dhamane"></img>
          <img src={Project3} alt="Bahubali Dhamane"></img>
        </div>
        <div
          className="Image_Gallery_Row2"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <img src={Project4} alt="Bahubali Dhamane"></img>
          <img src={Project5} alt="Bahubali Dhamane"></img>
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
