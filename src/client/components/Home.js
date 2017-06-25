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
        <header className={styles.hero}>
          <h2>Universal React Express Starter App</h2>
        </header>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>{this.state.toggle ? 'On!' : 'Off!'}</button>
        <div>
          <Link to="detail/1234">Details</Link>
        </div>
      </div>
    );
  }
}
