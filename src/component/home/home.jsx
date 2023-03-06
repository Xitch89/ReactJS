import React, { Component } from 'react';
import Content from '../content/content';
import ExampleLayouts from '../camon/exampleLayouts/exampleLayouts';
import FollowSocial from '../followSocial/followSocial';
import MainImage from '../mainImage/mainImage';
import OurServices from '../ourServices/ourServices';
import SocRef from '../socRef/socRef';
import SubscribeBlock from '../subscribeBlock/subscribeBlock';
import BottomBlock from '../bottomBlock/bottomBlock';

class Home extends Component {
  render() {
    return (
      <>
        <MainImage />
        <ExampleLayouts grayText="Our Core Layouts" yellowText="Template Pages" />
        <Content />
        <BottomBlock />
        <ExampleLayouts grayText="Our Core Features" yellowText="Our Services" />
        <OurServices />
        <FollowSocial />
        <SubscribeBlock />
        <SocRef />
      </>
    );
  }
}

export default Home;
