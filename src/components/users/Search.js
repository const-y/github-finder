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
      </div>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
};

export default Search;
