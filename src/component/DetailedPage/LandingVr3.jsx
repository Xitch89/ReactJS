import React, { Component } from 'react';
import LandingVr3 from '../../assets/image_detail_page/landing_vr2.jpg';
import DetailedPage from '../camon/DetailedPage/DetailedPage';
import withScrollToTop from '../withScrollToTop';

class Landing3 extends Component {
  render() {
    return (
      <DetailedPage weyImage={LandingVr3} mainText="Landing vr.3" sumText="Lorem ipsum dolor sit amet consecte" />
    );
  }
}

const Landing3WithScrollToTop = withScrollToTop(Landing3);

export default Landing3WithScrollToTop;
