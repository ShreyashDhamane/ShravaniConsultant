import React from "react";
import Card from "./Card/Card";
import ResidentialBuilding from "./../../../assets/images/building.png";
import CommercialBuilding from "./../../../assets/images/commercial.png";
import Architect from "./../../../assets/images/architect.png";
import Retrofitting from "./../../../assets/images/retrofitting.png";
import Consultancy from "./../../../assets/images/conversation.png";
import SteelStructure from "./../../../assets/images/eiffel-tower.png";
import "./WhatWeDo2.scss";

const WhatWeDo2 = () => {
  return (
    <div className="What_We_Do2">
      <h2>WE HANDLE A FULL RANGE OF SERVICES</h2>
      <hr></hr>
      <div className="Inner_Div">
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
