import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <Link to={`${imageRef}${this.props.id}`}>
          <img src={image} alt="404" />
        </Link>
        <Link
          to={`${imageRef}${this.props.id}`}
          className={classes.layoutsItems_refImg}
        >
          {massage}
        </Link>
      </div>
    );
  }
}

export default Post;