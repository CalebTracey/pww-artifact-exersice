import React from 'react';
import PropTypes from 'prop-types';

const StrokeButton = ({ title, color, backgroundColor }) => (
  <button
    style={{
      color: `${color}`,
      backgroundColor: `${backgroundColor}`,
    }}
    className="stroke-button"
    type="button"
  >
    <p style={{ fontSize: '1.25vh' }} className="button-text">
      {title}
    </p>
  </button>
);

StrokeButton.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default StrokeButton;
