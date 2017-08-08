/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Note: Top level components must be class based for HMR to function
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
