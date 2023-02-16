import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css"

class Header extends Component {
  render() {
    return (
      <body>
        <div className={classes.wrapper}>
          <header>
            <div>
              <nav className={classes.navBar}>
                <div className={classes.toggleMenu}>
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                  <div className="line line3"></div>
                </div>
                
                <ul className={classes.navList}>
                  <li>
                    <Link className={classes.transparent_header_logo} to="/">
                      Atelier.
                    </Link>
                  </li>
                  <li>
                    <a className={classes.transparent_header_overview} href="404">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a className={classes.transparent_header_other} href="404">
                      Pages
                    </a>
                  </li>
                  <li>
                    <a className={classes.transparent_header_other} href="404">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className={classes.transparent_header_other} href="404">
                      Template
                    </a>
                  </li>
                  <li>
                    <a className={classes.transparent_header_other} href="404">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <a className={classes.transparent_header_buyTemplate} href="404">
              Buy Template
            </a>
          </header>
        </div>
      </body>
    );
  }
}

export default Header;