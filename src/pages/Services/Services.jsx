import React from "react";
import ListItem from "../../components/Services/ListItem";
import TickMark from "./../../assets/images/tick.svg";
import "./Services.scss";

const Services = () => {
  return (
    <div>
      <div className="Services">
        <div className="Commercial">
          <h2>Commercial</h2>
          <h3 className="Feature_Heading">Structural Engineering</h3>
          <p>
            Shravani Consultant delivers first class structural engineering
            services on projects of all sizes.
          </p>
          <div className="Features_Div">
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Analysis & Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Inspection & Assessment"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Value Engineering"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Peer Review & Third Party Verification"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Project Management Consultancy"
            />
          </div>
          <h3 className="Feature_Heading">Brand Partner Services (BPS)</h3>
          <p>
            Shravani Consultant delivers first class structural engineering
            services on projects of all sizes.
          </p>
          <div className="Features_Div">
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Pre-Stressed Concrete Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Deep Foundation: Pile Foundation"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Geotech Consulting: Soil Investigation Report"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Concrete Mix Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Construction Material Testing & Inspection"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Construction Material Testing & Inspection"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Retrofitting & Rehabilitation of Structures"
            />
          </div>
          {/* <p className="Type_Of_Work">
            The types of commercial projects we work on include:
          </p>
          <div className="Features_Div">
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
          </div> */}
        </div>
      </div>{" "}
      {/* <div className="Services Services2">
        <div className="Commercial">
          <h2>Residential</h2>
          <h3 className="Feature_Heading">Structural Engineering</h3>
          <p>
            Shravani Consultant delivers first class structural engineering
            services on projects of all sizes.
          </p>
          <div className="Features_Div">
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
          </div>
          <h3 className="Feature_Heading">
            Mechanical, Electrical And Plumbing (MEP)
          </h3>
          <p>
            Shravani Consultant delivers first class structural engineering
            services on projects of all sizes.
          </p>
          <div className="Features_Div">
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
          </div>
          <p className="Type_Of_Work">
            The types of commercial projects we work on include:
          </p>
          <div className="Features_Div">
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
          </div>
        </div>
      </div>
      <div className="Services Services3">
        <div className="Commercial">
          <h2>Aluminium, Steel & Other Engineering</h2>
          <h3 className="Feature_Heading">Structural Engineering</h3>
          <p>
            Shravai Consultant has a dedicated, full-service Aluminum
            Engineering department. Providing hard copies & Efiles, your plans
            will be engineered in accordance with the latest edition of the FBC
            and municipal ordinances for a simple permitting process. We can
            execute our Aluminum Engineering services in as little as 2 days for
            permitting or review purposes. We proudly handle 500 projects per
            week.
          </p>
          <div className="Features_Div">
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
            <ListItem
              src={TickMark}
              alt={"tick mark"}
              heading="Structural Design"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
