import React, { useState } from "react";
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
    <div className="Contact_Us">
      <h3> Get In Touch</h3>
      <hr />
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
  );
};

export default ContactUs;
