import React, { Component } from "react";
import classes from "./App.module.css";
import { ReactComponent as Square } from "./assets/icons/square.svg";
import { ReactComponent as Triangle } from "./assets/icons/triangle.svg";
import { ReactComponent as Hemisphere } from "./assets/icons/hemisphere.svg";
import { ReactComponent as Hemisphere2 } from "./assets/icons/hemisphere2.svg";
import { ReactComponent as Circle } from "./assets/icons/circle.svg";
import { ReactComponent as Ruby } from "./assets/icons/ruby.svg";
import { ReactComponent as InstaImg } from "./assets/icons/insta-img.svg";
import { ReactComponent as Facebook } from "./assets/icons/facebook.svg";
import { ReactComponent as Twiter } from "./assets/icons/twiter.svg";
import { ReactComponent as Instagram } from "./assets/icons/instagram.svg";
import { ReactComponent as Link } from "./assets/icons/link.svg";

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

class Header extends Component {
  render() {
    return (
      <body>
        <div className={classes.wraper}>
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
                    <a className={classes.transparentHeadr_logo} href="404">
                      Atelier.
                    </a>
                  </li>
                  <li>
                    <a className={classes.transparentHeadr_overview} href="404">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a className={classes.transparentHeadr_other} href="404">
                      Pages
                    </a>
                  </li>
                  <li>
                    <a className={classes.transparentHeadr_other} href="404">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className={classes.transparentHeadr_other} href="404">
                      Template
                    </a>
                  </li>
                  <li>
                    <a className={classes.transparentHeadr_other} href="404">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <a className={classes.transparentHeadr_buyTemplate} href="404">
              Buy Template
            </a>
          </header>
        </div>
      </body>
    );
  }
}

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

class Content extends Component {
  render() {
    return (
      <div className={classes.exampleLayouts_container}>
        <div className={classes.exampleLayouts_wraper}>
          <div className={classes.layoutsItems}>
            <a href={"#"}>
              <img src={require("./assets/images/landing-vr1.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Landing vr.1
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/landing-vr2.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Landing vr.2
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/landing-vr3.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Landing vr.3
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/portfolio1.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Portfolio 1
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/portfolio2.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Portfolio 1
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/portfolio3.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Portfolio 1
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/portfolio4.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Portfolio 1
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img
                src={require("./assets/images/single-project.png")}
                alt="404"
              />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Single Project
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img
                src={require("./assets/images/about-company.png")}
                alt="404"
              />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              About Company
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/about-team.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              About TEam
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img
                src={require("./assets/images/single-team-member.png")}
                alt="404"
              />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Single Team Member
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/faq-page.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              FAQ PAge
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/contact-us.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Contact Us
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/blog1.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Blog 1
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/blog2.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Blog 2
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/blog3.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Blog 3
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img
                src={require("./assets/images/blog-categories.png")}
                alt="404"
              />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Blog Categories
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/single-blog.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Single Blog
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/pricing.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Pricing
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/style-guide.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Style guide
            </a>
          </div>
          <div className={classes.layoutsItems}>
            <a href="#">
              <img src={require("./assets/images/licenses.png")} alt="404" />
            </a>
            <a href="#" className={classes.layoutsItems_refImg}>
              Licenses
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class BottomBlock extends Component {
  render() {
    return <div className={classes.bottomBlock}></div>;
  }
}

class OurServices extends Component {
  render() {
    return (
      <div className={classes.exampleLayouts}>
        <p className={classes.exampleLayouts_core}>Our Core Features</p>
        <p className={classes.bigYellowText}>Our Services</p>
        <div className={classes.ourServices_container}>
          <div className={classes.ourServices_wraper}>
            <div className={classes.ourServices_items}>
              <div className={classes.ourServices_vectorImg}>
                <Square />
              </div>
              <div className={classes.ourServices_vectorImg2}>
                <Triangle />
              </div>

              <p className={classes.ourServices_yellowText}>Web Design</p>
              <p className={classes.ourServices_grayText}>
                Suspendisse varius enim in
              </p>
              <p className={classes.ourServices_graySmallText}>
                cursus id rutrum imperdiet. eros elementum tristique.
              </p>
            </div>
            <div className={classes.ourServices_items}>
              <div className={classes.ourServices_vectorImg}>
                <Hemisphere />
              </div>
              <div className={classes.ourServices_vectorImg3}>
                <Hemisphere2 />
              </div>

              <p className={classes.ourServices_yellowText}>UI/UX Design</p>
              <p className={classes.ourServices_grayText}>
                Suspendisse varius enim in
              </p>
              <p className={classes.ourServices_graySmallText}>
                cursus id rutrum imperdiet. eros elementum tristique.
              </p>
            </div>
            <div className={classes.ourServices_items}>
              <div className={classes.ourServices_vectorImg}>
                <Circle />
              </div>
              <div className={classes.ourServices_vectorImg4}>
                <Ruby />
              </div>
              <p className={classes.ourServices_yellowText}>SEO & Marketing</p>
              <p className={classes.ourServices_grayText}>
                Suspendisse varius enim in
              </p>
              <p className={classes.ourServices_graySmallText}>
                cursus id rutrum imperdiet. eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class FollowSocial extends Component {
  render() {
    return (
      <div className={classes.followSocial_container}>
        <div className={classes.followSocial_wraper}>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={require("./assets/images/soc-img.jpg")}
              alt="404"
            />
          </div>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={require("./assets/images/soc-img2.jpg")}
              alt="404"
            />
          </div>
          <div className={classes.followSocial_items_followMe}>
            <p className={classes.followSocial_yellowText}>Follow me on</p>
            <a className={classes.followSocial_linkInsta} href="404">
              Instagram
            </a>
          </div>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={require("./assets/images/soc-img3.jpg")}
              alt="404"
            />
          </div>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={require("./assets/images/soc-img4.jpg")}
              alt="404"
            />
          </div>
        </div>
      </div>
    );
  }
}

class SubscribeBlock extends Component {
  render() {
    return (
      <div className={classes.subscribeBlock}>
        <p className={classes.subscribeBlock_bigYellowText}>
          Subscribe to Atelier <br />
          Newsletter
        </p>
        <p className={classes.subscribeBlock_someText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <form className={classes.subscribe} action="#" method="post">
          <input type="email" required />
          <button className={classes.subscribe_button} type="submit">
            “Subscribe”
          </button>
        </form>
        <p className={classes.subscribeBlock_explanationButton}>
          * By clicking button, you agree to our terms and that you have read
          our terms
        </p>
      </div>
    );
  }
}

class SocRef extends Component {
  render() {
    return (
      <div className={classes.socRef}>
        <a href="#">
          <Facebook className={classes.socSvg} />
        </a>
        <a href="#">
          <Twiter className={classes.socSvg} />
        </a>
        <a href="#">
          <Instagram className={classes.socSvg} />
        </a>
        <a href="#">
          <Link className={classes.socSvg} />
        </a>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <div className={classes.footer_conteiner}>
          <div className={classes.footer_powered}>
            <p>Powered by</p>
            <a href="#">Webflow</a>
          </div>
          <div className={classes.footer_rightRef}>
            <a href="https://github.com/Xitch89/ReactJS">GitHub</a>
            <a
              className={classes.footer_rightRefBorder}
              href="https://www.figma.com/file/eukF6vHhGD51To79l661wN/Atelier.-%2B?node-id=1%3A2"
            >
              Figma
            </a>
            <a href="#">author: Andrii Oliinyk</a>
          </div>
        </div>
      </div>
    );
  }
}
