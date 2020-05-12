import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  render() {
    const { icon, title } = this.props;

    return (
      <nav className="navbar bg-primary">
        <h1><i className={icon} /> {title}</h1>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder',
};

Navbar.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default Navbar;