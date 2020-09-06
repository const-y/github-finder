import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  if (alert === null) {
    return null;
  }

  return (
    <div className={`alert alert=${alert.type}`}>
      <i className="fas fa-info-circle" /> {alert.msg}
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.shape({
    msg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default Alert;
