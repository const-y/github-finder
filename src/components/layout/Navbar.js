import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => (
  <nav className="navbar bg-primary">
    <h1>
      <i className={icon} /> {title}
    </h1>
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
