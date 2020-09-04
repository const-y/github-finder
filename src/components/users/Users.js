import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

const Users = ({ users, loading }) => {
  if (loading) {
    return <div>'Loading...'</div>;
  }

  return (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
