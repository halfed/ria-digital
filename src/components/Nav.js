import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = (props) => {
  return (
    <nav className="top-bar" data-topbar role="navigation">
      <ul className="title-area">
        <li className="toggle-topbar"><Link to="/"><span>Contacts</span></Link></li>
        <li className="toggle-topbar"><Link to="/form"><span>Contact Form</span></Link></li>
      </ul>
    </nav>
  );
}

export default Nav;