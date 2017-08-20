/* @flow */
import React, { Component } from 'react';
import './Detail.scss';
import type { Namespace$DetailParams } from '../../types';

// Note: Top level components must be class based for HMR to function
// eslint-disable-next-line react/prefer-stateless-function
export default class Detail extends Component {
  props: Namespace$DetailParams;

  render() {
    return (
      <div className="detail">
        <h2>Detail page for {this.props.params.id}.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nemo consequuntur maxime in eaque, aut unde. Provident voluptate,
          recusandae inventore, mollitia, iusto ullam et obcaecati voluptatem
          accusantium minima adipisci, fugit sunt.
        </p>
      </div>
    );
  }
}
