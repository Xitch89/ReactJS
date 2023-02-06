import React from "react";
import classes from "./App.module.css";

function App() {
  return (
    <body>
      <div classNameName={classes.wraper}>
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
        <div className={classes.exampleLayouts}>
          <p className={classes.exampleLayouts_core}>Our Core Layouts</p>
          <p className={classes.bigYellowText}>Template Pages</p>
        </div>
        <div className={classes.exampleLayouts_container}>
          <div className={classes.exampleLayouts_wraper}>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/landing-vr1.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Landing vr.1
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/landing-vr2.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Landing vr.2
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/landing-vr3.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Landing vr.3
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/portfolio1.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Portfolio 1
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/portfolio2.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Portfolio 1
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/portfolio3.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Portfolio 1
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/portfolio4.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Portfolio 1
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/single-project.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Single Project
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/about-company.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                About Company
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/about-team.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                About TEam
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/single-team-member.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Single Team Member
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/faq-page.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                FAQ PAge
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/contact-us.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Contact Us
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/blog1.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Blog 1
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/blog2.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Blog 2
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/blog3.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Blog 3
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/blog-categories.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Blog Categories
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/single-blog.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Single Blog
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/pricing.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Pricing
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/style-guide.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Style guide
              </a>
            </div>
            <div className={classes.layoutsItems}>
              <a href="#">
                <img src="img/licenses.png" alt="404" />
              </a>
              <a href="#" className={classes.layoutsItems_refImg}>
                Licenses
              </a>
            </div>
          </div>
        </div>
        <div className={classes.bottomBlock}></div>
        <div className={classes.exampleLayouts}>
          <p className={classes.exampleLayouts_core}>Our Core Features</p>
          <p className={classes.bigYellowText}>Our Services</p>
          <div className={classes.ourServices_container}>
            <div className={classes.ourServices_wraper}>
              <div className={classes.ourServices_items}>
                <img
                  className={classes.ourServices_vectorImg}
                  src="img/square.svg"
                  alt="404"
                />
                <img
                  className={classes.ourServices_vectorImg2}
                  src="img/triangle.svg"
                  alt="404"
                />
                <p className={classes.ourServices_yellowText}>Web Design</p>
                <p className={classes.ourServices_grayText}>
                  Suspendisse varius enim in
                </p>
                <p className={classes.ourServices_graySmallText}>
                  cursus id rutrum imperdiet. eros elementum tristique.
                </p>
              </div>
              <div className={classes.ourServices_items}>
                <img
                  className={classes.ourServices_vectorImg}
                  src="img/hemisphere.svg"
                  alt="404"
                />
                <img
                  className={classes.ourServices_vectorImg3}
                  src="img/hemisphere2.svg"
                  alt="404"
                />
                <p className={classes.ourServices_yellowText}>UI/UX Design</p>
                <p className={classes.ourServices_grayText}>
                  Suspendisse varius enim in
                </p>
                <p className={classes.ourServices_graySmallText}>
                  cursus id rutrum imperdiet. eros elementum tristique.
                </p>
              </div>
              <div className={classes.ourServices_items}>
                <img
                  className={classes.ourServices_vectorImg}
                  src="img/circle.svg"
                  alt="404"
                />
                <img
                  className={classes.ourServices_vectorImg2}
                  src="img/ruby.svg"
                  alt="404"
                />
                <p className={classes.ourServices_yellowText}>
                  SEO & Marketing
                </p>
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
        <div className={classes.followSocial_container}>
          <div className={classes.followSocial_wraper}>
            <div className={classes.followSocial_items}>
              <img
                className={classes.followSocial_items_vectorImg}
                src="img/insta-img.svg"
                alt="404"
              />
              <img
                className={classes.followSocial_socImg}
                src="img/soc-img.jpg"
                alt="404"
              />
            </div>
            <div className={classes.followSocial_items}>
              <img
                className={classes.followSocial_items_vectorImg}
                src="img/insta-img.svg"
                alt="404"
              />
              <img
                className={classes.followSocial_socImg}
                src="img/soc-img2.jpg"
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
              <img
                className={classes.followSocial_items_vectorImg}
                src="img/insta-img.svg"
                alt="404"
              />
              <img
                className={classes.followSocial_socImg}
                src="img/soc-img3.jpg"
                alt="404"
              />
            </div>
            <div className={classes.followSocial_items}>
              <img
                className={classes.followSocial_items_vectorImg}
                src="img/insta-img.svg"
                alt="404"
              />
              <img
                className={classes.followSocial_socImg}
                src="img/soc-img4.jpg"
                alt="404"
              />
            </div>
          </div>
        </div>
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
        <div className={classes.socRef}>
          <a href="#">
            <img src="img/facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="img/tweeter.svg" alt="" />
          </a>
          <a href="#">
            <img src="img/instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="img/link.svg" alt="" />
          </a>
        </div>
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
      </div>
    </body>
  );
}

export default App;