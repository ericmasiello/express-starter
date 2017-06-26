/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from './App.scss';

// Note: Top level components must be class based for HMR to function
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <header className={styles.hero}>
          <h2>Universal React Express Starter App</h2>
        </header>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="detail/1234">Details</Link>
        </nav>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
