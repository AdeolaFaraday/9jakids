import React from "react";
import "./Header.css";
import logo from "./cropped-9ijakids_logo___160px-2.png";

const Header = () => {
  return (
    <section>
      <div className="logo-container">
        <img src={logo} alt="9jakidslogo" />
      </div>
    </section>
  );
};

export default Header;
