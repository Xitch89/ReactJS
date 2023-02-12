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
import { ReactComponent as Twitter } from "./assets/icons/twitter.svg";
import { ReactComponent as Instagram } from "./assets/icons/instagram.svg";
import { ReactComponent as Link } from "./assets/icons/link.svg";
//* images
import landing_vr1 from "./assets/images/landing_vr1.png";
import about_company from "./assets/images/about_company.png";
import about_team from "./assets/images/about_team.png";
import blog1 from "./assets/images/blog1.png";
import blog2 from "./assets/images/blog2.png";
import blog3 from "./assets/images/blog3.png";
import blog_categories from "./assets/images/blog_categories.png";
import contact_us from "./assets/images/contact_us.png";
import faq_page from "./assets/images/faq_page.png";
import landing_vr2 from "./assets/images/landing_vr2.png";
import landing_vr3 from "./assets/images/landing_vr3.png";
import licenses from "./assets/images/licenses.png";
import portfolio1 from "./assets/images/portfolio1.png";
import portfolio2 from "./assets/images/portfolio2.png";
import portfolio3 from "./assets/images/portfolio3.png";
import portfolio4 from "./assets/images/portfolio4.png";
import pricing from "./assets/images/pricing.png";
import single_blog from "./assets/images/single_blog.png";
import single_project from "./assets/images/single_project.png";
import single_team_member from "./assets/images/single_team_member.png";
import soc_img from "./assets/images/soc_img.jpg";
import soc_img2 from "./assets/images/soc_img2.jpg";
import soc_img4 from "./assets/images/soc_img4.jpg";
import soc_img3 from "./assets/images/soc_img3.jpg";
import style_guide from "./assets/images/style_guide.png";





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
                    <a className={classes.transparent_header_logo} href="404">
                      Atelier.
                    </a>
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

class Post extends Component {
  constructor (props){
    super(props);
    this.state = {
      imageRef: '/example_page/',
    }
  }
  render() {
    const {imageRef} = this.state;
    return(
      <div className={classes.layoutsItems}>
        <a href={`${imageRef}${this.props.id}`}>
          <img src={this.props.image} alt="404" />
        </a>
        <a
          href={`${imageRef}${this.props.id}`}
          className={classes.layoutsItems_refImg}
        >
          {this.props.massage}
        </a>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div className={classes.exampleLayouts_container}>
        <div className={classes.exampleLayouts_wrapper}>
          <Post id = 'landing_vr1' massage = 'Landing vr.1' image = {landing_vr1} />
          <Post id = 'landing_vr2' massage = 'Landing vr.2' image = {landing_vr2} />
          <Post id = 'landing_vr3' massage = 'Landing vr.3' image = {landing_vr3} />
          <Post id = 'portfolio1' massage = 'Portfolio 1' image = {portfolio1} />
          <Post id = 'portfolio2' massage = 'Portfolio 1' image = {portfolio2} />
          <Post id = 'portfolio3' massage = 'Portfolio 1' image = {portfolio3} />
          <Post id = 'portfolio4' massage = 'Portfolio 1' image = {portfolio4} />
          <Post id = 'single_project' massage = 'Single Project' image = {single_project} />
          <Post id = 'about_company' massage = 'About Company' image = {about_company} />
          <Post id = 'about_team' massage = 'About TEam' image = {about_team} />
          <Post id = 'single_team_member' massage = 'Single Team Member' image = {single_team_member} />
          <Post id = 'faq_page' massage = 'FAQ Page' image = {faq_page} />
          <Post id = 'contact_us' massage = 'Contact Us' image = {contact_us} />
          <Post id = 'blog1' massage = 'Blog 1' image = {blog1} />
          <Post id = 'blog2' massage = 'Blog 2' image = {blog2} />
          <Post id = 'blog3' massage = 'Blog 3' image = {blog3} />
          <Post id = 'blog_categories' massage = 'Blog Categories' image = {blog_categories} />
          <Post id = 'single_blog' massage = 'Single Blog' image = {single_blog} />
          <Post id = 'pricing' massage = 'Pricing' image = {pricing} />
          <Post id = 'style_guide' massage = 'Style guide' image = {style_guide} />
          <Post id = 'licenses' massage = 'Licenses' image = {licenses} />
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
  constructor(props){
    super(props);
    this.state = {
      grayTextBig1: 'Suspendisse varius enim in',
      grayTextSmall1: 'cursus id rutrum imperdiet. eros elementum tristique.',
      grayTextBig2: 'Suspendisse varius enim in',
      grayTextSmall2: 'cursus id rutrum imperdiet. eros elementum tristique.',
      grayTextBig3: 'Suspendisse varius enim in',
      grayTextSmall3: 'cursus id rutrum imperdiet. eros elementum tristique.'
    }
  }
  render() {
    const {grayTextBig1,
      grayTextSmall1,
      grayTextBig2,
      grayTextSmall2,
      grayTextBig3,
      grayTextSmall3} = this.state;
    return (
      <div className={classes.exampleLayouts}>
        <p className={classes.exampleLayouts_core}>Our Core Features</p>
        <p className={classes.bigYellowText}>Our Services</p>
        <div className={classes.ourServices_container}>
          <div className={classes.ourServices_wrapper}>
            <div className={classes.ourServices_items}>
              <div className={classes.ourServices_vectorImg}>
                <Square />
              </div>
              <div className={classes.ourServices_vectorImg2}>
                <Triangle />
              </div>

              <p className={classes.ourServices_yellowText}>Web Design</p>
              <p className={classes.ourServices_grayText}>
                {grayTextBig1}
              </p>
              <p className={classes.ourServices_graySmallText}>
                {grayTextSmall1}
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
                {grayTextBig2}
              </p>
              <p className={classes.ourServices_graySmallText}>
                {grayTextSmall2}
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
                {grayTextBig3}
              </p>
              <p className={classes.ourServices_graySmallText}>
                {grayTextSmall3}
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
        <div className={classes.followSocial_wrapper}>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={soc_img}
              alt="404"
            />
          </div>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={soc_img2}
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
              src={soc_img3}
              alt="404"
            />
          </div>
          <div className={classes.followSocial_items}>
            <div className={classes.followSocial_items_vectorImg}>
              <InstaImg />
            </div>
            <img
              className={classes.followSocial_socImg}
              src={soc_img4}
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
          <Twitter className={classes.socSvg} />
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
  constructor(props){
    super(props);
    this.state = {
      webflow: '#',
      gitHubWey: 'https://github.com/Xitch89/ReactJS',
      figma: 'https://www.figma.com/file/eukF6vHhGD51To79l661wN/Atelier.-%2B?node-id=1%3A2',
      author: 'Andrii Oliinyk'
    }
  }
  render() {
    const {webflow, gitHubWey, figma, author} = this.state;
    return (
      <div className={classes.footer}>
        <div className={classes.footer_container}>
          <div className={classes.footer_powered}>
            <p>Powered by</p>
            <a href={webflow}>Webflow</a>
          </div>
          <div className={classes.footer_rightRef}>
            <a href={gitHubWey}>GitHub</a>
            <a
              className={classes.footer_rightRefBorder}
              href={figma}
            >
              Figma
            </a>
            <a href={author}>author: Andrii Oliinyk</a>
          </div>
        </div>
      </div>
    );
  }
}
