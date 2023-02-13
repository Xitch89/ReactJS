import React, { Component } from "react";
import classes from "./post.module.css";

class Post extends Component {
  constructor (props){
    super(props);
    this.state = {
      imageRef: '/example_page/',
    }
    this.props = {
      image: '',
      massage: ''
    }
  }
  render() {
    const {imageRef} = this.state;
    const {image, massage} = this.props;
    return(
      <div className={classes.layoutsItems}>
        <a href={`${imageRef}${this.props.id}`}>
          <img src={image} alt="404" />
        </a>
        <a
          href={`${imageRef}${this.props.id}`}
          className={classes.layoutsItems_refImg}
        >
          {massage}
        </a>
      </div>
    );
  }
}

export default Post;