/* @flow */
import React, { Component } from 'react';
import {
  Header,
  Navigation,
  Section,
} from 'stencil';
import styles from './Dify.scss';
import Step from '../components/Step';
import * as config from './difyConfig';

export default class Dify extends Component {
  render() {
    return (
      <div>
        <Header
          className={styles.header}
          titleNode="Do It For You Website Design"
          taglineNode="Let us create your website, so you can focus on your business"
          fullHeight
          showPointer
          scrollToElmID={config.LINKS[0].waypoint}
          navigationNode={
            <Navigation
              prioritize
              data-waypoint-nav
              showVistaprintLogo
              links={config.LINKS}
            />}
        />
        <Section
          size="lg"
          className="section--center"
        >
          {config.STEPS.map(step => <Step {...step} key={step.title} />)}
        </Section>
      </div>
    );
  }
}
