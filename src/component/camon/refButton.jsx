import React, { Component } from "react";
import { Link } from "react-router-dom";


class RefButton extends Component {
    render() {
        const {linkText, classLink} = this.props;
        return(
            <Link className={classLink} to="404">
                {linkText}
            </Link>
        )
    }
}

export default RefButton;