import React from 'react';
import {
  CardNumber,
} from 'stencil';
import Icon from 'digital-icons';

export const LINKS = [{
  children: 'How It Works',
  waypoint: 'dify-how-it-works',
  priority: 2,
}, {
  children: 'Customer Examples',
  waypoint: 'dify-customer-examples',
  priority: 4,
}, {
  children: 'Features',
  waypoint: 'dify-features',
  priority: 3,
}, {
  children: 'Pricing',
  waypoint: 'dify-pricing',
  priority: 1,
}];

export const STEPS = [{
  decorationNode: <CardNumber>1</CardNumber>,
  title: 'Submit Design Brief',
  description: 'Fill out a creative brief to explain your business and your vision for your site.',
}, {
  decorationNode: <CardNumber>2</CardNumber>,
  title: 'Schedule Phone Consultation',
  description: 'Fill out a creative brief to explain your business and your vision for your site.',
}, {
  decorationNode: <CardNumber>3</CardNumber>,
  title: 'Review Website',
  description: 'Give feedback and collaborate on changes to create the best design for you.',
}, {
  decorationNode: (
    <CardNumber>
      <Icon
        name="tick"
        size="xs"
      />
    </CardNumber>
  ),
  title: 'Accept Design',
  description: 'Accept the design for your site and go live. You can continue to work with us to make changes going forward, or edit yourself in our website builder tool.',
}];
