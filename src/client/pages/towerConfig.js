import React from 'react';
import { Button, CardBadge } from 'stencil';

export const NAV_POSTFIX = {
  children: 'Try for Free!',
  waypoint: 'tower-top',
};

export const LINKS = [{
  children: 'Builder',
  waypoint: 'tower-builder',
  priority: 3,
}, {
  children: 'Blocks',
  waypoint: 'tower-blocks',
  priority: 1,
}, {
  children: 'Templates',
  waypoint: 'tower-templates',
  priority: 2,
}, {
  children: 'Mobile',
  waypoint: 'tower-mobile',
  priority: 1,
}, {
  children: 'Reviews',
  waypoint: 'tower-reviews',
  priority: 2,
}, {
  children: 'Features',
  waypoint: 'tower-features',
  priority: 2,
}, {
  children: 'Pricing',
  waypoint: 'tower-pricing',
  priority: 2,
}];

export const FEATURES = [
  {
    icon: 'equalizer',
    title: 'Vistaprint brand matching',
    description: 'Already created Vistaprint marketing materials? We can coordinate a website with images and logos you’ve already added!',
  },
  {
    icon: 'mobile-portrait',
    title: 'Tablet & mobile websites',
    description: 'Our responsive templates build tablet and mobile versions automatically as you go so you save time and look great.',
  },
  {
    icon: 'lifesaver-a',
    title: 'Dedicated support',
    description: 'Our digital experts are here to help with extended phone hours, live chat, forums, and 24-hour email turnaround.',
  },
  {
    icon: 'internet',
    title: 'Custom domain name',
    description: 'Our small business websites come with custom URLs to make it easy for search engines and customers to find you.',
  },
  {
    icon: 'chart-traffic',
    title: 'Search optimization help',
    description: 'Our SEO tools can help make sure new customers can find you when searching sites like Google, Bing, and more.',
  },
  {
    icon: 'market',
    title: 'Web store items',
    description: 'Have something to sell? Easily accept PayPal payments on your small business website for a single service or multiple items.',
  },
  {
    icon: 'chart-line',
    title: 'Site traffic statistics',
    description: 'Make smart marketing decisions with details about who is visiting your site from where and at what times.',
  },
  {
    icon: 'camera',
    title: 'Free images & icons',
    description: 'Imagery can make or break a website, so all of our sites come with thousands of free, top-quality images and icons.',
  },
  {
    icon: 'pencil',
    title: 'Blog content',
    description: 'Blog articles are great way to engage customers and improve your search ranking. Our content block makes it easy!',
  },
];

export const PRICE_OPTIONS = [{
  itemName: 'Starter',
  itemPrice: '5',
  currencySymbol: '$',
  billingInterval: '/mo',
  billingNote: 'after one-month free trial',
  itemActionNode: <Button type="primary" href="/next">Get Started</Button>,
  itemFeatures: [
    'Basic Domain Name',
    'Unlimited Pages',
    'Mobile/Responsive Website',
    'Free Image Library',
    null,
    null,
    null,
    null,
    null,
  ],
}, {
  label: <CardBadge>Popular</CardBadge>,
  labelPosition: 'right',
  itemName: 'Standard',
  itemPrice: '18',
  currencySymbol: '$',
  billingInterval: '/mo',
  billingNote: 'after one-month free trial',
  itemActionNode: <Button type="primary" href="/next">Get Started</Button>,
  itemFeatures: [
    'Premium Domain Name',
    'Unlimited Pages',
    'Mobile/Responsive Website',
    'Free Image Library',
    'Site Activity Reports',
    '12 Email Addresses',
    'Search Engine Optimization',
    null,
    null,
  ],
}, {
  itemName: 'Premium',
  itemPrice: '25',
  currencySymbol: '$',
  billingInterval: '/mo',
  billingNote: 'after one-month free trial',
  itemActionNode: <Button type="primary" href="/next">Get Started</Button>,
  itemFeatures: [
    'Premium Domain Name',
    'Unlimited Pages',
    'Mobile/Responsive Website',
    'Free Image Library',
    'Site Activity Reports',
    '12 Email Addresses',
    'Search Engine Optimization',
    'Online Store',
    'Social Media Marketing',
  ],
}];
