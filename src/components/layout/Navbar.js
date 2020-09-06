import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => (
  <nav className="navbar bg-primary">
    <h1>
      <i className={icon} /> {title}
    </h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder',
};

Navbar.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default Navbar;
