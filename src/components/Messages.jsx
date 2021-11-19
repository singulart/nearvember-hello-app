import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>And the Blockchain said:</h2>
        <p>
          <strong>{messages}</strong>
        </p>
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.string
};
