import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer">
      <p>
        <small>copyright @ {year} Rafid Rabbi</small>
      </p>
    </footer>
  );
};

export default Footer;
