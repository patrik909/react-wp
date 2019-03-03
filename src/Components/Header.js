import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/Archive">Archive</Link>
      <Link to="/Page">Page</Link>
    </header>
  );
}

export default Header;