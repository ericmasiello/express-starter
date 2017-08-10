/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import type { PPP$StepProps } from '../../types';
import styles from './Step.scss';

export default function Step(props: PPP$StepProps) {
  const { decorationNode, title, description } = props;
  return (
    <div className={styles.step}>
      {React.cloneElement(decorationNode, {
        className: 'foobar',
      })}
      <h1 className="t3">
        {title}
      </h1>
      <p className="t5">
        {description}
      </p>
    </div>
  );
}

Step.propTypes = {
  decorationNode: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Step.defaultProps = {
  decorationNode: null,
};
