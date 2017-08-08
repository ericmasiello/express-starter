/* eslint-disable react/no-array-index-key, jsx-a11y/img-has-alt */

import React, { Component } from 'react';
// import sticky from 'sticky-nav';
import {
  Header,
  Navigation,
  Button,
  PackageCards,
  Media,
  VerticalMedia,
  Feature,
} from 'stencil';

import {
  LINKS,
  NAV_POSTFIX,
  FEATURES,
  PRICE_OPTIONS,
} from './towerConfig';

import styles from './Tower.scss';

export default class TowerProductPageDemo extends Component {
  componentDidMount() {
    // sticky.init();
  }

  render() {
    return (
      <div
        data-waypoint
        id="tower-top"
        className={styles.tower}
      >
        <Header
          className={styles.header}
          scrollToElmID={LINKS[0].waypoint}
          titleNode="Website Builder"
          navigationNode={
            <Navigation
              prioritize
              data-waypoint-nav
              showVistaprintLogo
              links={LINKS}
              postfixNode={NAV_POSTFIX}
            />}
          fullHeight
        >
          <div>
            <h1 className="u-text-shadow t2-fluid u-mb-20 u-mt-30">
              Finally, a truly simple way to build a website you&#39;ll be proud of.
            </h1>
            <div className="header__content__email">
              <Button type="success" uppercase className="u-mb-10">
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </Header>
        <section
          className="section section--lg u-text-center"
          data-waypoint
          data-waypoint-trigger
          id="tower-builder"
        >
          <h1 className="t2-fluid u-bold">
              A website that practically builds itself
          </h1>
          <p className="t4-fluid section__content u-mb-50">
            We’ve taken out the time-consuming guesswork.
            Just drag in the type of block you want,
            then customize it to fit your business and your brand.
          </p>
          <div className="builder-demo">
            <div className="builder-demo__block">
              <img
                src="https://stencil.digital.vistaprint.com/docs/assets/block-1.png"
                alt="Website Builder Header Block"
              />
              <div className="builder-demo__block__description">
                <img
                  className="drawn-arrow"
                  src="https://stencil.digital.vistaprint.com/docs/assets/drawn-arrow.svg"
                  alt="drawn arrow"
                />
                <div className="builder-demo__block__description__text">
                  Header Block
                </div>
              </div>
            </div>
            <div className="builder-demo__block">
              <img
                src="https://stencil.digital.vistaprint.com/docs/assets/block-2.png"
                alt="Website Builder Demo & Paragraphs Block"
              />
              <div className="builder-demo__block__description">
                <img
                  className="drawn-arrow"
                  src="https://stencil.digital.vistaprint.com/docs/assets/drawn-arrow.svg"
                  alt="drawn arrow"
                />
                <div className="builder-demo__block__description__text">
                  Images &amp; Paragraphs Block
                </div>
              </div>
            </div>
            <div className="builder-demo__block">
              <img
                src="https://stencil.digital.vistaprint.com/docs/assets/block-3.png"
                alt="Website Builder Social Block"
              />
              <div className="builder-demo__block__description">
                <img
                  className="drawn-arrow"
                  src="https://stencil.digital.vistaprint.com/docs/assets/drawn-arrow.svg"
                  alt="drawn arrow"
                />
                <div className="builder-demo__block__description__text">
                  Social Block
                </div>
              </div>
            </div>
            <div className="builder-demo__block">
              <img
                src="https://stencil.digital.vistaprint.com/docs/assets/block-4.png"
                alt="Website Builder Icon & Text Block"
              />
              <div className="builder-demo__block__description">
                <img
                  className="drawn-arrow"
                  src="https://stencil.digital.vistaprint.com/docs/assets/drawn-arrow.svg"
                  alt="drawn arrow"
                />
                <div className="builder-demo__block__description__text">
                  Image With Icon &amp; Text Block
                </div>
              </div>
            </div>
            <div className="builder-demo__block">
              <img src="https://stencil.digital.vistaprint.com/docs/assets/block-5.png" alt="Website Builder Contact & Map Block" />
              <div className="builder-demo__block__description">
                <img
                  className="drawn-arrow"
                  src="https://stencil.digital.vistaprint.com/docs/assets/drawn-arrow.svg"
                  alt="drawn arrow"
                />
                <div className="builder-demo__block__description__text">
                  Contact &amp; Map Block
                </div>
              </div>
            </div>
          </div>
          <Button type="success" uppercase className="u-mv-30">
            Try it yourself!
          </Button>
          <div className="section--builder__videos">
            <div className="video">
              <img
                className="video--image"
                src="https://stencil.digital.vistaprint.com/docs/assets/thumb-t3ryj5d1w8.png"
                alt="example-1"
              />
              <h1 className="t4-fluid u-bold video__title" >
                Add and arrange beautiful blocks
              </h1>
              <div className="video__description">
                Don&#39;t waste time laying out things like menus,
                ecommerce, forms, or galleries;
                we&#39;ve already built them all for you.
              </div>
            </div>
            <div className="video">
              <img
                className="video--image"
                src="https://stencil.digital.vistaprint.com/docs/assets/thumb-jq2uah5u75.png"
                alt="example-2"
              />
              <h1 className="t4-fluid u-bold video__title">
                Fully customize in seconds
              </h1>
              <div className="video__description">
                Easily edit text and add images from our extensive library,
                your own photos, or even your other Vistaprint products.
              </div>
            </div>
            <div className="video">
              <img
                className="video--image"
                src="https://stencil.digital.vistaprint.com/docs/assets/thumb-8uauj5h7m1.png"
                alt="example-3"
              />
              <h1 className="t4-fluid u-bold video__title">
                Create a consistent brand
              </h1>
              <div className="video__description">
                Choose from font pairings and color palettes that reflect your
                brand and are designed to look great together.
              </div>
            </div>
          </div>
        </section>
        <section
          className="section--blocks"
          data-waypoint
          id="tower-blocks"
        >
          <Media
            media={<img
              src="https://stencil.digital.vistaprint.com/docs/assets/blocks-graphic.png"
              alt="Vistaprint's Website Builder customizable elements"
            />}
          >
            <h1 className="t3-fluid u-bold">Build better - with blocks.</h1>
            <p className="t4-fluid u-mb-20 u-color-inverted-light-50">
              When you think about it, all websites have things in common.
              It’s not the actual pieces that set them apart,
              it’s how they’re arranged and what they look like.
            </p>
            <p className="t4-fluid u-color-inverted-light-50">
              We took the elements all websites share and turned them into beautiful blocks
              that can be rearranged, customized, and personalized so you can create a website
              that’s all your own - without recreating the wheel.
            </p>
          </Media>
        </section>
        <VerticalMedia
          className="section section--templates"
          media={<img
            src="https://stencil.digital.vistaprint.com/docs/assets/template.png"
            alt="Vistaprint's Website Builder customizable elements"
            className="template--image template--image-flush u-mt-50"
          />}
          data-waypoint
          id="tower-templates"
        >
          <h1 className="t3-fluid u-bold">Templates made just for you</h1>
          <p className="t4-fluid u-color-light-60 section__content">
            We’ll ask about your business, then personalize responsive templates just for you.
            Customize with professionally-designed color sets, high-quality images, modern icons,
            and curated font pairings.
          </p>
        </VerticalMedia>
        <VerticalMedia
          className="section section--responsive"
          media={<img
            src="https://stencil.digital.vistaprint.com/docs/assets/responsive-devices.png"
            alt="Vistaprint's Website Builder customizable elements"
            className="template--image template--image-flush"
          />}
          data-waypoint
          id="tower-mobile"
        >
          <h1 className="t3-fluid u-bold">Look your best across devices</h1>
          <p className="t4-fluid u-color-light-60 section__content">
            Customers use all kinds of devices - mobile, tablet, and desktop -
            so our responsive templates adapt automatically to any screen size.
            Never waste time building a mobile-only version again.
          </p>
        </VerticalMedia>
        <section
          className="section section--lg u-text-center tower__reviews u-color-inverted"
          data-waypoint
          id="tower-reviews"
        >
          <h1 className="t3-fluid u-bold u-color-inverted">
            Hear what real people are saying
          </h1>
          <p className="t4-fluid section__content u-color-inverted">
            The Vistaprint Digital website builder has been described as easy,
            intuitive, fast, and even fun. But don’t take our word for it;
            listen to real people who tried our site builder for the very first time
            and shared their honest feedback about the experience.
          </p>
        </section>
        <section
          className="section section--lg u-text-center"
          data-waypoint
          id="tower-features"
        >
          <h1 className="t3-fluid u-bold">
            Search-friendly, mobile-friendly, you-friendly
          </h1>
          <div className="feature-grid u-mt-50 u-pt-20">
            {FEATURES.map((feature, i) => (
              <Feature
                {...feature}
                key={`feature-${i}`}
                wrapIcon
              />
            ))}
          </div>
        </section>
        <section
          className="section section--lg tower__price u-text-center"
          data-waypoint
          id="tower-pricing"
        >
          <h1 className="t3-fluid u-bold u-color-inverted">Easy to build, easy to buy. </h1>
          <p className="t4-fluid section__content u-color-inverted u-mb-40">
            We created our signature small business website package with you in mind.
            Now you can get everything you need, without paying for anything you don&#39;t.
          </p>
          <PackageCards items={PRICE_OPTIONS} />
        </section>
      </div>
    );
  }
}
