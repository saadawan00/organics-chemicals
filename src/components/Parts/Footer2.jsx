import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "../Segments/Switcher";
import bestPriceIcon from './../../images/icons/best-price.png';
import timelyDelieveryIcon from './../../images/icons/shipping-timed.png';
import techSupportIcon from './../../images/icons/tech-support.png';
var bgimage = require("./../../images/background/footer-bg.png");

class Footer2 extends React.Component {
  constructor(props) {
    super(props);
    var homepage2 = /\/home-factory2/i;
    var homepage3 = /\/home-construction3/i;
    var homepage6 = /\/home-solar-energy/i;

    if (
      homepage2.test(window.location.href) ||
      homepage6.test(window.location.href)
    ) {
      this.currentstate = {
        logo: require("./../../images/logo-9-light.png").default,
      };
    } else if (homepage3.test(window.location.href)) {
      this.currentstate = {
        logo: require("./../../images/logo-7-light.png").default,
      };
    } else {
      this.currentstate = {
        logo: require("./../../images/logo-7-light.png").default,
      };
    }
  }

  updateFooterLogo = (updatedlogo) => {
    this.currentstate.logo = updatedlogo.default;
  };

  render() {
    return (
      <>
        {this.props.showBanner && (
          <div className="section-content bg-gray m-t30">
              <div className="container">
                  <div className="row">
                      <div className="col-4 bg-gray p-t40 p-b40">
                      <div className="flex-center">
                          <img src={bestPriceIcon} width={25} className="m-r15 m-b5" alt="" /> 
                          <h4 className="m-0 text-center">
                          Competitive Prices
                          </h4>
                      </div>
                      </div>
                      <div className="col-4 bg-gray p-t40 p-b40">
                      <div className="flex-center">
                          <img src={timelyDelieveryIcon} width={25} className="m-r15 m-b5" alt="" /> 
                          <h4 className="m-0 text-center">Timely Delivery</h4>
                      </div>
                      </div>
                      <div className="col-4 bg-gray p-t40 p-b40">
                      <div className="flex-center">
                          <img src={techSupportIcon} width={25} className="m-r15 m-b5" alt="" /> 
                          <h4 className="m-0 text-center">Free Technical Support</h4>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
        )}
        <footer className="site-footer footer-large footer-dark text-white footer-style2">
          {/* FOOTER BLOCKES START */}
          <div
            className="footer-top bg-no-repeat bg-bottom-right"
            style={{ backgroundImage: "url(" + bgimage.default + ")" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div className="footer-h-left">
                    <div className="widget widget_about">

                      {/* <div className="logo-footer clearfix">
                        <NavLink to={"./"}>
                          <img src={this.currentstate.logo} alt="" />
                        </NavLink>
                      </div> */}
                      <h2 style={{marginTop: '12px'}}>Our Company</h2>

                      <p>
                        We invite you to connect with our dedicated team.
                        Whether you are an industrial entity seeking dependable
                        solutions or a partner interested in collaborating with
                        us, Organics is your trusted partner in industrial
                        excellence in different sectors, mainly in USA and other
                        countries.
                      </p>
                    </div>
                    <div className="widget recent-posts-entry">
                      <ul className="widget_address">
                        <li>
                          <i className="fa fa-map-marker" />
                          USA Office: 819 Vassar Lane Schaumburg, Chicago, IL
                          60193
                        </li>
                        <li>
                          <i className="fa fa-map-marker" />
                          Offshore Office: 188-D, Momdot Block, Whadat Road,
                          Lahore, Pakistan
                        </li>
                        
                      </ul>
                    </div>
                    <ul className="social-icons  wt-social-links footer-social-icon">
                      <li>
                        <a
                          href={
                            "https://www.google.com/maps/place/ORGANICS/@31.4986581,74.2734893,17z/data=!3m1!4b1!4m6!3m5!1s0x391903b0030320cf:0x5148bfd97758a9c5!8m2!3d31.4986536!4d74.2760642!16s%2Fg%2F11cs6b6mdx?entry=ttu"
                          }
                          rel="noreferrer"
                          target="_blank"
                        >
                          <i className="fa fa-google" />
                        </a>
                      </li>

                      <li>
                        <a
                          href={"https://www.facebook.com/Organics.solutions"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      {/* <li>
                        <NavLink to={"#"} className="fa fa-twitter" />
                      </li> */}
                      <li>
                        <a
                          href={
                            "https://www.linkedin.com/company/organicspakllc/"
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <div className="row footer-h-right">
                    <div className="col-lg-5 col-md-4">
                      <div className="widget widget_services">
                        <h3 className="widget-title">Site Navigation</h3>
                        <ul>
                          <li>
                            <NavLink to={"/#"}>About Us</NavLink>
                          </li>
                          
                          <li>
                            <NavLink to={"/#"}>CSR</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>Careers</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>Strong Brands</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/#"}>Get Quote</NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-8">
                      <div className="widget widget_services">
                        <h3 className="widget-title">Our Services  <h4 style={{color: 'white', marginTop: '4px'}}>How can we help you?</h4></h3>
                        <ul className="widget_address">
                        
                        <li>
                          <i className="fa fa-envelope" />
                          <span>info@organics.com.co</span>
                        
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-phone" />
                          +1 (773) 870-1288
                        </li>
                        <li>
                          {" "}
                          <i className="fa fa-phone" />
                          +92-423-541-0051-53
                        </li>
                      </ul>
                      </div>
                      <h3>Live Chat</h3>
                      <p>Mon - Sat : 08:00 - 17:00</p>
                    </div>
                  </div>
                  <div className="widget widget_newsletter">
                    <h3 className="widget-title">Newsletter</h3>
                    <p>
                      Subscribe to our newsletter to receive latest news on our
                      services.
                    </p>
                    <div className="newsletter-input">
                      <div className="input-group">
                        <input
                          id="email"
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Enter your email"
                        />
                        <div className="input-group-append">
                          <button
                            type="button"
                            className="input-group-text nl-search-btn text-black site-bg-primary title-style-2"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FOOTER COPYRIGHT */}
          <div className="footer-bottom">
            <div className="container">
              <div className="wt-footer-bot-left d-flex justify-content-between">
                <span className="copyrights-text">
                  © Organics 2023 &nbsp; |  &nbsp;<span>All rights reserved.</span>
                </span>
                <ul className="copyrights-nav">
                  <li>
                    <NavLink to={"#"}>Terms &amp; Condition</NavLink>
                  </li>
                  <li>
                    <NavLink to={"#"}>&nbsp;&nbsp;Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contactus"}>&nbsp;&nbsp;Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)} />
      </>
    );
  }
}

export default Footer2;
