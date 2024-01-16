import React, { useState } from "react";
import Location from "./../../assets/images/location.svg";
import Phone from "./../../assets/images/phone.svg";
import Email from "./../../assets/images/email.svg";
import "./ContactUs.scss";

const ContactUs = () => {
  const [useData, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send the email

    //clear the fields
    setData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="Contact_Us_Page">
      <div className="Navbar_Area"></div>
      <div className="Contact_Inner_Div">
        <div className="Left">
          <div>
            <img src={Location} alt="Location" />
            <h3>Office Location</h3>
            <p>
              Neighborhood Shopping Complex, F-7, Ahilya Gokul Patil Rd, Vinu
              Veena CHS, Sector 4, Nerul, Navi Mumbai, Maharashtra - 400706
            </p>
          </div>
          <div>
            <img src={Phone} alt="Phone" />
            <h3>Contact Number</h3>
            <p>
              +91 – 9820610943 <br />
              +91 – 8879836426
            </p>
          </div>
          <div>
            <img src={Email} alt="Email" />
            <h3>Contact Email</h3>
            <p>shravanidhamane@gmail.com</p>
          </div>
        </div>
        <div className="Right">
          <h2>Contact Us</h2>
          <hr />
          <p>
            Your search for the right structural engineering company ends here.
            Connect with us to see how we can make a difference !
          </p>
          <form className="Form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={useData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={useData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No."
              value={useData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={useData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={useData.message}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <iframe
          title="Embedded Content"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.445066237035!2d73.0122707!3d19.0441597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3e693a7c79b%3A0xb84ddfbceef6e4ef!2sShravani%20Consultants!5e0!3m2!1sen!2sin!4v1704622377287!5m2!1sen!2sin"
          style={{ border: 0 }}
          className="Iframe"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
