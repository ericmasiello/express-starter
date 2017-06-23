/* @flow */
import React, { Component } from 'react';
import type { Namespace$AppState } from '../types';

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
      <div>
        <h2>Home page! {this.state.toggle ? 'Yup!' : 'Nope'}</h2>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>Toggle</button>
      </div>
    );
  }
}
