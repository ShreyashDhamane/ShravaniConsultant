import React from "react";
import CompanyImage from "./../../assets/images/company_logo.png";
import BahubaliImage from "./../../assets/images/bahubali_dhamane.jpg";
import ShravaniDhamaneImage from "./../../assets/images/Shravani_Dhamane.jfif";
import ShashankDhamaneImage from "./../../assets/images/Shashank_Dhamane.jfif";
import SantoshDhamaneImage from "./../../assets/images/santosh_dhamane.jpg";
import MangeshImage from "./../../assets/images/mangesh.jpeg";
import AbhijeetHiramethImage from "./../../assets/images/Abhijeet_Hiremath.jfif";
import FounderImage from "./../../assets/images/userUndefined.jfif";
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
            At Shravani Consultant, we specialize in providing comprehensive
            structural consulting services for a diverse range of projects. From
            designing cutting-edge skyscrapers to ensuring the stability of
            historical landmarks, our team is equipped to tackle challenges of
            any scale. Bahubali Dhamane and the consultancy have successfully
            completed projects spanning various industries, earning a reputation
            for delivering high-quality, sustainable solutions.
          </p>
          <p>
            Our approach is rooted in a deep appreciation for the unique
            requirements of each project. Bahubali understands that successful
            structural engineering goes beyond meeting basic safety standards;
            it's about creating structures that stand the test of time while
            seamlessly integrating with their surroundings. This commitment to
            excellence is evident in the many accolades and satisfied clients
            that Shravani Consultant has garnered over the years.{" "}
          </p>
          <p>
            As you navigate through our website, you'll discover the diverse
            portfolio of projects we've had the privilege to be a part of. From
            conceptualization to construction, Bahubali Dhamane and the team at
            Shravani Consultant are dedicated to ensuring that every project
            receives the attention it deserves.
          </p>
          <p>
            Whether you're an architect seeking a reliable structural consultant
            or a developer looking to bring your vision to life, Shravani
            Consultant is here to collaborate with you. Our entire team look
            forward to contributing their expertise to your next project and
            helping turn your architectural dreams into reality.
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
            src={BahubaliImage}
            alt="bahubali Dhamane, Founder of Shravani Consultant"
          />
          <div>
            <h3 className="H3">Bahubali Dhamane, P.E.</h3>
            <p>
              Welcome to the virtual home of Bahubali Dhamane, a seasoned
              structural engineer and the visionary founder of Shravani
              Consultant. With an unwavering passion for creating robust,
              innovative solutions, he brings a wealth of experience and
              expertise to the world of structural consulting.
            </p>
            <p>
              Mr. Bahubali has spent 30+ years honing his skills in the field of
              structural engineering, developing a keen understanding of the
              intricate balance between form and function. As the driving force
              behind Shravani Consultant, he has cultivated a team of dedicated
              professionals who share the same commitment to excellence and
              innovation.
            </p>
            <p>
              What sets him apart is not just his technical prowess but also his
              ability to envision and implement groundbreaking solutions. From
              incorporating sustainable materials into designs to optimizing
              structural systems for maximum efficiency, he has consistently
              pushed the envelope, earning a reputation as an industry
              trailblazer.
            </p>
          </div>
        </div>

        <div className="LD_Inner_Div2">
          <Card
            src={FounderImage}
            alt="Founder"
            name="Manoj Chougule"
            role="Sr. Design Engineer"
            degree="M.E. Civil"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Akshay Mahajan"
            role="Design Engineer"
            degree="B.E. Civil"
          />
          <Card
            src={ShravaniDhamaneImage}
            alt="Founder"
            name="Shravani Dhamane"
            role="Design Engineer"
            degree="M.Tech, IIT Guwahati"
          />
          <Card
            src={ShashankDhamaneImage}
            alt="Founder"
            name="Shashank D."
            role="Civil Engineer"
            degree="Nikmar Civil"
          />
          <Card
            src={SantoshDhamaneImage}
            alt="Founder"
            name="Santosh D."
            role="Sr. Draftsman"
            degree="Nikmar Civil"
          />
          <Card
            src={MangeshImage}
            alt="Founder"
            name="Mangesh Gulhane"
            role="Sr. Structural Engineer"
            degree="M.E. Civil"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Vijay Pawar"
            role="Civil Engineer"
            degree="B.E. Civil"
          />
          <Card
            src={AbhijeetHiramethImage}
            alt="Founder"
            name="Abhijeet Hiremath"
            role="Planning and Schedulling Engineer"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Bharat Panchal"
            role="Sr. Draftsman"
          />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Haresh Bhandare"
            role="Sr. Draftsman"
          />
          <Card src={FounderImage} alt="Founder" name="Saad" role="Draftsman" />
          <Card
            src={FounderImage}
            alt="Founder"
            name="Abhishek"
            role="Draftsman"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
