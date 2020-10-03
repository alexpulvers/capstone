import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to ="./Homepage"> Home </Link>
        </li>
        <li>
          <Link to="./Signin"> Sign In </Link>
        </li>
        <li>
          <Link to="./SiteControl"> Equipment Page </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;