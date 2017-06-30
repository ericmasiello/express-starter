/* @flow */
import React, { Component } from 'react';
import styles from './NotFound.scss';

// Note: Top level components must be class based for HMR to function
// eslint-disable-next-line react/prefer-stateless-function
export default class NotFound extends Component {
  render() {
    return (
      <div className={styles['not-found']}>
        <h1>404 - Page Not Found</h1>
      </div>
    );
  }
}
