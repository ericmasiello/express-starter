/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import './Detail.css';

// Note: Top level components must be class based for HMR to function
/* eslint-disable react/prefer-stateless-function */
export default class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <h2>Detail page.</h2>
        <div>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */
