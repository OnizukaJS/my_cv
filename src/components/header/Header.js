import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="header">
      <h1>Hello Widoun & JB</h1>
      <ul className="header_links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/login"}>Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
