/* @flow */
import React from 'react';
import PropTypes from 'prop-types';

export default function App(props: Object) {
  return (
    <div>
      <h1>My App</h1>
      <div>
        {props.children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
