import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => (
  <div className="card text-center">
    <img src={avatar_url} alt="" className="round-img" style={{ width: 60 }} />
    <h3>{login}</h3>
    <div>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm">
        More
      </Link>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
