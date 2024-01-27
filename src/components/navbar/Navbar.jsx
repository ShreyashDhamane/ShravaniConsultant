import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ListItem from "./ListItem/ListItem";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = (e) => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className={location.pathname === "/" ? "Navbar" : "Navbar2"}>
      <Link className="Navbar_Logo" to="/">
        Shravani Consultant
      </Link>
      <ul className={`Navbar_Items${menuOpen ? " open" : ""}`}>
        <ListItem name="Home" link="/" />
        <ListItem name="About Us" link="/about-us" onClick={handleClick} />
        <ListItem name="Services" link="/services" onClick={handleClick} />
        <ListItem name="Projects" link="/projects" onClick={handleClick} />
        <ListItem name="Careers" link="/careers" onClick={handleClick} />
        <ListItem name="Contact Us" link="/contact-us" onClick={handleClick} />
      </ul>
      <div
        className="Hamburger_Menu"
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
