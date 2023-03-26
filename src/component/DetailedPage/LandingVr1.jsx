import React, { Component } from 'react';
import LandingVr1 from '../../assets/image_detail_page/landing_vr1.jpg';
import DetailedPage from '../camon/DetailedPage/DetailedPage';
import withScrollToTop from '../withScrollToTop';

class Landing1 extends Component {
  render() {
    return (
      <DetailedPage weyImage={LandingVr1} mainText="Landing vr.1" sumText="Lorem ipsum dolor sit amet" />
    );
  }
}

const Landing1WithScrollToTop = withScrollToTop(Landing1);

export default Landing1WithScrollToTop;
