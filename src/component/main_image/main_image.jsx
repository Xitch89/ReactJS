import React, { Component } from "react";
import classes from "./main_image.module.css";

class MainImage extends Component {
  render() {
    return (
      <div className={classes.mainImage}>
        <p className={classes.mainImage_smallTitleText}>
          WE ARE Atelier Creative Agency
        </p>
        <h1 className={classes.mainImage_titleText}>
          Unique UI Kit Template for
          <br />
          Creative Agencies
        </h1>
        <a className={classes.mainImage_linkLayout} href="404">
          VIEW LAYOUTS
        </a>
      </div>
    );
  }
}

export default MainImage;