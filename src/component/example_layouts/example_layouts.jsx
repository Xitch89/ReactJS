import React, { Component } from "react";
import classes from "./example_layouts.module.css";

class ExampleLayouts extends Component {
  render() {
    return (
      <div className={classes.exampleLayouts}>
        <p className={classes.exampleLayouts_core}>Our Core Layouts</p>
        <p className={classes.bigYellowText}>Template Pages</p>
      </div>
    );
  }
}

export default ExampleLayouts;