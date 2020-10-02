import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Brewspace</h1>
        <p>A community effort to make better beer.</p>
      </div>
      <hr />
      <ul>
        <li>
          <Link to="./Forum"> Forum </Link>
        </li>
        <li>
          <Link to="./Signin"> Sign In </Link>
        </li>
        <li>
          <Link to="./SiteControl"> Home </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Header;
