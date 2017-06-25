/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import type { Namespace$AppState } from '../../types';
import styles from './Home.scss';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }

  state: Namespace$AppState;

  render() {
    return (
      <div className={styles.home}>
        <h2>Home page! {this.state.toggle ? 'Yup!' : 'Nope'}</h2>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>Toggle</button>
        <div>
          <Link to="detail/1234">Details</Link>
        </div>
      </div>
    );
  }
}
