/* @flow */
import React, { Component } from 'react';
import type { Namespace$AppState } from '../../types';
import styles from './Home.scss';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
    };
  }

  state: Namespace$AppState;

  render() {
    return (
      <div className={styles.home}>
        <button
          className={styles.button}
          onClick={() => this.setState({ clicks: this.state.clicks + 1 })}
        >
          Click to verify client side scripting: {this.state.clicks}
        </button>
        <h2>Features</h2>
        <ul>
          <li>Styling with CSS Modules, Post CSS, and Sass</li>
          <li>Flow Type Integration</li>
          <li>Express with EJS templates</li>
          <li>Babel integration for client and server</li>
          <li>React and React Router</li>
          <li>ESLint and Stylelint</li>
          <li>Logging with Bunyan</li>
        </ul>
        <h2>Dev-Mode Features</h2>
        <ul>
          <li>Hot Module Replacement</li>
        </ul>
        <h2>Production-Mode Features</h2>
        <ul>
          <li>Server Side Rendering</li>
        </ul>
      </div>
    );
  }
}
