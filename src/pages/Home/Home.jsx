import React from "react";
import Intro from "../../components/Home/Intro/Intro";
import WhatWeDo from "../../components/Home/WhatWeDo/WhatWeDo";
import WhatWeDo2 from "../../components/Home/WhatWeDo2/WhatWeDo2";
import Projects from "../../components/Home/ProjectsSection/Projects";
import Philosophy from "../../components/Home/Philosophy/Philosophy";
import About from "../../components/Home/About/About";
import ContactUs from "../../components/Home/ContactUs/ContactUs";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Intro />
      <WhatWeDo />
      <WhatWeDo2 />
      <Philosophy />
      <Projects />
      <About />
      <ContactUs />
    </div>
  );
};

export default Home;
