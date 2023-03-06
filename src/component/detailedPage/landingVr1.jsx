import React, { Component } from 'react';
import LandingVr1 from '../../assets/image_detail_page/landing_vr1.jpg';
import DetailedPage from '../camon/detailedPage/detailedPage';

class Landing1 extends Component {
  render() {
    return (
      <div>
        <DetailedPage weyImage={LandingVr1} mainText="Landing vr.1" sumText="Lorem ipsum dolor sit amet" />
      </div>
    );
  }
}

export default Landing1;
