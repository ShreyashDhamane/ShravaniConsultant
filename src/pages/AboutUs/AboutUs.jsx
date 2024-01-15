import React from "react";
import CompanyImage from "./../../assets/images/company.png";
import FounderImage from "./../../assets/images/bahubali_dhamane.jpg";
import { useNavigate } from "react-router-dom";
import "./AboutUs.scss";
import Card from "../../components/AboutUs/Card/Card";
import Philosophy2 from "./../../components/AboutUs/Philosophy2/Philosophy";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/contact-us");
  };

  return (
    <div className="About_Us_Page">
      <div className="Upper_Div">
        <div className="UD_Left">
          <h1>A LEGACY OF EXCELLENCE</h1>
          <p>
            Over the past several years, we have been fortunate enough to
            establish ourselves as one of fastest growing engineering firms in
            the country! Our firm is a family owned business that is raising the
            standard of service that you should expect from your engineer.
          </p>
          <p>
            We specialize in providing structural and MEP engineering to a
            variety of clients, including architects, contractors, developers,
            owners, and more. Our goal is to be a valuable resource to every
            customer, exceeding his or her engineering needs on budget and ahead
            of schedule.
          </p>
          <p>
            Our clients choose Shravani Consultant because we deliver
            outstanding service, rapid turnaround times, and competitive pricing
            on every project.
          </p>
          <p>
            At Shravani Consultant, we go beyond structures; we cultivate
            enduring relationships by consistently surpassing expectations.
          </p>
          <button onClick={handleClick}>Contact Us</button>
        </div>
        <div className="UD_Right">
          <img src={CompanyImage} alt="Company Logo" />
        </div>
      </div>
      <hr />
      <Philosophy2 />
      <hr />

      <div className="Lower_Div">
        <h3 className="Heading3">Our Signing Engineers</h3>
        <p>
          Our signing engineers are licensed Professional Engineers who have the
          expertise and experience to ensure that your engineering documents
          meet the latest Building Codes and are properly signed and sealed.
        </p>
        <div className="LD_Inner_Div">
          <img
            src={FounderImage}
            alt="bahubali Dhamane, Founder of Shravani Consultant"
          />
          <div>
            <h3 className="H3">Bahubali Dhamane, P.E.</h3>
            <p>
              Bahubali Dhamane is the President and Principal Professional
              Engineer at Shravani Consultant. With a Bachelor's degree in Civil
              Engineering from Walchand College of Engineering, Bahubali
              Dhamane's extensive expertise to his role as the Engineer of
              Record for the Firm. He oversees all engineering operations,
              ensuring compliance with building codes, standards, and local
              guidelines.
            </p>
            <p>
              Bahubali's diverse portfolio includes site-specific engineering
              for aluminum structures, steel, metal buildings, swimming pools,
              and composite wood and concrete structures. He reviews engineering
              plans to guarantee adherence to the latest building codes.
              Collaborating closely with contractors, architects, reviewers, and
              homeowners, Bahubali ensures optimal design and functionality
              while meeting code requirements.
            </p>
            <p>Bahubali's License Number is P.E. ######. </p>
          </div>
        </div>

        <div className="LD_Inner_Div2">
          <Card
            src={FounderImage}
            alt="Founder"
            name="Shravani Dhamane"
            role="Civil Engineer"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Shravani Dhamane"
            role="Civil Engineer"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Shravani Dhamane"
            role="Civil Engineer"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Shravani Dhamane"
            role="Civil Engineer"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Shravani Dhamane"
            role="Civil Engineer"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Shravani Dhamane"
            role="Civil Engineer"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Shravani Dhamane"
            role="Civil Engineer"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Shravani Dhamane"
            role="Civil Engineer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
