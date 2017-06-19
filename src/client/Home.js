/* @flow */
import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  render() {
    return (
      <div>
        <h2>Home page! {this.state.toggle ? 'Yup!' : 'Nope'}</h2>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>Toggle</button>
      </div>
    );
  }
}
