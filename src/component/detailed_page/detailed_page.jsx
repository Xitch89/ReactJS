import React, { Component }  from "react";
import classes from "./detail_page.module.css";
import landing_vr1 from "../../assets/image_detail_page/landing_vr1.png";
import landing_vr2 from "../../assets/image_detail_page/landing_vr2.png";
import landing_vr3 from "../../assets/image_detail_page/landing_vr3.png";



class DetailedPage extends Component {
    constructor(props){
        super(props);
        this.props = {
            weyImage: '',
            mainText: '',
            smallText: '',
            sumText: ''
        }
    }
    render() {
        const {weyImage, mainText, sumText} = this.props
        return(
            <div className={classes.detail}>
                <img className={classes.image} src={weyImage} alt="404" />
                <h1>{mainText}</h1>
                <p className={classes.smallText}>{sumText}</p>
            </div>
        )
    }
};

export const LandingVr1 = (props) => {
  return (
    <div>
      <DetailedPage weyImage = {landing_vr1} mainText = "Landing vr.1" sumText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga explicabo facere doloribus voluptatibus veritatis non dist" />
    </div>
  )
}

export const LandingVr2 = (props) => {
  return (
    <div>
      <DetailedPage weyImage = {landing_vr2} mainText = "Landing vr.2" sumText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga explicabo facere doloribus voluptatibus veritatis non dist" />
    </div>
  )
}

export const LandingVr3 = (props) => {
  return (
    <div>
      <DetailedPage weyImage = {landing_vr3} mainText = "Landing vr.3" sumText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga explicabo facere doloribus voluptatibus veritatis non dist" />
    </div>
  )
}