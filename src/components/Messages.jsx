import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2 className='is-premium'>And the Blockchain said:</h2>
        <p className='is-premium'>
          <strong>{messages}</strong>
        </p>
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.string
};
