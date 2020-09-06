import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    const { getUser, match } = this.props;

    getUser(match.params.login);
  }

  componentWillUnmount() {
    const { clearUser } = this.props;

    clearUser();
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit GitHub profile
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>Username: {login}</strong>
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    <strong>Company: {company}</strong>
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>Website: {blog}</strong>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Publick Gists: {public_gists}</div>
        </div>
      </>
    );
  }
}

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  clearUser: PropTypes.func.isRequired,
};

export default User;
