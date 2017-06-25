/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Detail.scss';
import type { Namespace$DetailParams } from '../../types';

// Note: Top level components must be class based for HMR to function
// eslint-disable-next-line react/prefer-stateless-function
export default class Detail extends Component {
  props: Namespace$DetailParams;

  render() {
    return (
      <div className={styles.detail}>
        <h2>Detail page for {this.props.params.id}.</h2>
        <div>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    );
  }
}
