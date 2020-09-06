import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  handleSubmit = (e) => {
    const { searchUsers } = this.props;
    const { text } = this.state;

    e.preventDefault();
    searchUsers(text);
    this.setState({ text: '' });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { clearUsers, showClear } = this.props;
    const { text } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-block badge-dark"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
