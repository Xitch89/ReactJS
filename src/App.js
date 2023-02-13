import React, { Component } from "react";
import classes from "./App.module.css";
import Header from "./component/header/header";
import MainImage from "./component/main_image/main_image";
import ExampleLayouts from "./component/example_layouts/example_layouts";
import Content from "./component/content/content";
import BottomBlock from "./component/bottom _block/bottom _block";
import OurServices from "./component/our_services/our_services";
import FollowSocial from "./component/follow_social/follow_social";
import SubscribeBlock from "./component/subscribe_block/subscribe_block";
import SocRef from "./component/soc_ref/soc_ref";
import Footer from "./component/footer/footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainImage />
        <ExampleLayouts />
        <Content />
        <BottomBlock />
        <OurServices />
        <FollowSocial />
        <SubscribeBlock />
        <SocRef />
        <Footer />
      </>
    );
  }
}

export default App;
